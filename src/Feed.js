import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import './Feed.css';
import { db } from './Firebase';
import InputOptions from './InputOptions';
import Posts from './Posts';
import FlipMove from 'react-flip-move';

import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

function Feed () {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);

  const sendPost = event => {
    event.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  };

  useEffect(() => {
    db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ));
  }, []);

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input1'>
          <Create />
          <form action=''>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Start a post' />
            <button type='submit' onClick={sendPost}>Send</button>
          </form>
        </div>

        <div className='feed__options'>
          <InputOptions title='Photo' Icon={Image} color='#378fe9' />

          <InputOptions title='Video' Icon={Subscriptions} color='#5f9b41' />

          <InputOptions title='Event' Icon={EventNote} color='#c37d16' />

          <InputOptions title='Write Article' Icon={CalendarViewDay} color='#e16745' />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      </FlipMove>
      {/* <Posts name='JV' description='Test' message='asdsa' photoUrl='' /> */}
    </div>
  );
}

export default Feed;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/user/userSlice';
import { auth } from './Firebase';
import './Login.css';

function Login () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please Enter a full name');
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePicture
        })
          .then(() => {
            dispatch(login({
              email: userAuth.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePicture
            }));
          })
        ;
      }).catch(error => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.name,
          photoURL: userAuth.user.photoURL
        }));
      }).catch(error => alert(error));
  };

  return (
    <div className='login'>
      <img src='https://www.nli.no/wp-content/uploads/2019/09/Linkedin-Logo-1024x576.png' alt='' />

      <form action=''>
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (Required if registering)' />

        <input type='text' value={profilePicture} onChange={e => setProfilePicture(e.target.value)} placeholder='Profile Picture' />

        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />

        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;

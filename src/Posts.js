import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { forwardRef } from 'react';
import InputOptions from './InputOptions';
import './Posts.css';

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='posts'>
      <div className='posts__header'>
        <Avatar src={photoUrl}>
          {name[0]}
        </Avatar>
        <div className='posts__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='posts__body'>
        <p>{message}</p>
      </div>

      <div className='posts__buttons'>
        <InputOptions title='Like' Icon={ThumbUpAltOutlined} color='gray' />
        <InputOptions title='Comment' Icon={ChatOutlined} color='gray' />
        <InputOptions title='Share' Icon={ShareOutlined} color='gray' />
        <InputOptions title='Send' Icon={SendOutlined} color='gray' />
      </div>
    </div>

  );
});

export default Posts;

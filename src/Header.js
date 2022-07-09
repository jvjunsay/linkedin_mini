import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/user/userSlice';
import { auth } from './Firebase';

function Header () {
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>

      <div className='header__left'>
        <img src='https://th.bing.com/th/id/R.14f8d0d8ea255a03471032d79087fdf0?rik=Jcph23UZL08iCA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fColor-of-the-LinkedIn-Logo.jpg&ehk=hT5Ibkg%2fFPa%2f7TPm%2fs2TP8Fxdd7ySQQBuZmn88xh5j0%3d&risl=&pid=ImgRaw&r=0' alt='' />

        <div className='header__search'>

          {/* search icon */}
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon={Home} title='Home' />
        <HeaderOptions Icon={SupervisorAccount} title='My Network' />
        <HeaderOptions Icon={BusinessCenter} title='Jobs' />
        <HeaderOptions Icon={Chat} title='Messaging' />
        <HeaderOptions Icon={Notifications} title='Notifications' />
        <HeaderOptions title='me' avatar onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;

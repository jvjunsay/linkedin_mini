import { FiberManualRecord, Info } from '@material-ui/icons';
import './Widgets.css';

function Widgets () {
  const article = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__article__left'>
        <FiberManualRecord />
      </div>

      <div className='widgets__article__right'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>

      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <Info />
      </div>

      {article('JV is the best', 'Top news - 999 readers')}
      {article('JV is the best', 'Top news - 999 readers')}
      {article('JV is the best', 'Top news - 999 readers')}
      {article('JV is the best', 'Top news - 999 readers')}
      {article('JV is the best', 'Top news - 999 readers')}
      {article('JV is the best', 'Top news - 999 readers')}
    </div>
  );
}

export default Widgets;

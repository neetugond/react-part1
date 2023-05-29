import { useContext } from 'react';
import './Video.css';
import ThemeContext from '../context/ThemeContext';
import VideoDispatchContext from '../context/VideoDispatchContext'

function Video({ title, id, channel = "Neetu tech", views, time, verified, children,editVideo }) {
  console.log('render Video')
  const theme = useContext(ThemeContext)
  const dispatch = useContext(VideoDispatchContext)

  return (
    <>
      <div className={`container ${theme}`}>
        <button className='close' onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
        <button className='edit' onClick={() => editVideo(id)}>edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'} </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Video;
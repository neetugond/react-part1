import './Video.css';
import useVideoDispatch from '../hooks/VideoDispatch';
import useTheme from '../hooks/Theme';

function Video({ title, id, channel = "Neetu tech", views, time, verified, children,editVideo }) {
  console.log('render Video')
  const theme = useTheme
  const dispatch = useVideoDispatch()

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
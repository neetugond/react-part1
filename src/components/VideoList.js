import Video from './Video'
import PlayButton from './PlayButton'
import { useContext } from 'react'
import VideosContext from '../context/VideosContext'
// sibling to sibling - from sibling to parent anf than parent to another sibling
// if this code was in parent component than it is child to parent 
// from parent videos is pass as a prop and access here as a parameter
function VideoList({editVideo }) {
  const videos = useContext(VideosContext)
    return (
        <>
       {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
           id={video.id}
           editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
        </>
    )
}

export default VideoList
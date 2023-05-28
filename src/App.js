import { useReducer, useState } from 'react';
import './App.css';
import videoDB from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  console.log('render App')
  const [editableVideo, setEditableVideo] = useState(null)
  //use reducer - it is for state management like redux 
// state - video, action
  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos, 
          {
            ...action.payload, 
            id: videos.length + 1
          }
        ]
      case 'DELETE':
        return videos.filter(el => el.id !== action.payload)
      case 'UPDATE':
        // findIndex of editable video
        const index = videos.findIndex(el => el.id === action.payload.id)
        // remove one id and add updated video - replace
        const newVideos = [...videos] //make copy of array
        // splice in copy array
        newVideos.splice(index, 1, action.payload)
        // setVideos(newVideos) //render updated value
        // 
        setEditableVideo(null);
        return newVideos;
      default:
        return videos
    }
  }
  // 1st initial state and dispatch - it will give facibility to manipulate videos
  // 1st argument reducer function 2nd - data
  const [videos, dispatch] = useReducer(videoReducer, videoDB)
  
  function editVideo(id) {
    setEditableVideo(videos.find(el => el.id === id))

  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      {/* 3. add addVideosProp as a prop */}
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>


    </div>
  );
}

export default App;
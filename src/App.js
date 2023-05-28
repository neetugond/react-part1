import { useState } from 'react';
import './App.css';
import videoDB from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  console.log('render App')

  const [videos,setVideos] = useState(videoDB);
  // 2. passing video from child component
  function addVideosProp(video) {
    setVideos([
      ...videos, //setting parent state
      {
        ...video, //setting child component state with id 
        id:videos.length+1 
      }

    ])
  }
  function deleteVideo(id) {
    // only delete id will not match other than that all id will match so, all other id will filter and come into new array
    // render new array
    setVideos(
      videos.filter(el=>el.id !==id)
    )
    
    console.log(id)
  }

  
  return (
    <div className="App" onClick={() => console.log('App')}>
      {/* 3. add addVideosProp as a prop */}
      <AddVideo addVideosProp={addVideosProp} />
      <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
      

    </div>
  );
}

export default App;
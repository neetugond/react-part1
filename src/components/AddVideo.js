import './AddVideo.css'
import { useState } from 'react';
// 4 .taking function as prop
function AddVideo({ addVideosProp }) {
    const initialState = {
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
        title: "",
        views: ""
    }
    // state lifting - child component state pass as a prop in parent component and than from than in child component props come as a parameter and function call
    // 1. pass this state- video in parent component
    const [video, setVideo] = useState(initialState);
    const handleChange = (e) => {
        e.stopPropagation()
        //  target name here
        // console.log(e.target.name, e.target.value)
        setVideo({
            ...video,
            [e.target.name]: e.target.value
            // key and value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // 5.  getting data from parent
        addVideosProp(video)
 // console.log(video)
        //making input empty after data render
        setVideo(initialState)

       

    }
    return (
        <>
            <form>
                {/* define name is here as a title */}
                <input onChange={handleChange}
                    name='title' type="text" placeholder='title' value={video.title} />
                <input onChange={handleChange} name='views' type="text" placeholder='view'value={video.views} />
                <button onClick={handleSubmit}>
                    Add Video
                </button>


            </form>
        </>
    )
}

export default AddVideo


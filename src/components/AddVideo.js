import useVideoDispatch from '../hooks/VideoDispatch';
import './AddVideo.css'
import { useEffect, useRef, useState } from 'react';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: "",
    views: ""
}
// 4 .taking function as prop
function AddVideo({editableVideo }) {
 
    // state lifting - child component state pass as a prop in parent component and than from than in child component props come as a parameter and function call
    // 1. pass this state- video in parent component
    const [video, setVideo] = useState(initialState);
    // custom hook use here istead of dispatch
    const dispatch = useVideoDispatch()
    // 1 initialize the value null
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video})
        } else {
             // 5.  getting data from parent
             dispatch({ type: 'ADD', payload: video })
        }
       
 // console.log(video)
        //making input empty after data render
        setVideo(initialState)
    }
    
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
 

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)  
            
        }
        // value can access here
        // value.current
        inputRef.current.focus()
        // // example  just for logic where can we use useRef, not for use
        // "type here".split('').forEach((char, i) => {
        //     setTimeout(() => {
        //         inputRef.current.placeholder = inputRef.current.placeholder+char
        //     }, 200*i)
        // })
       
    },[editableVideo])
    return (
        <>
            <form>
                {/* define name is here as a title */}
                {/*always ref name only use - data (inputRef) will push into ref */}
                {/* 2 use the value */}
                <input ref={inputRef} onChange={handleChange}
                    name='title' type="text" placeholder='title' value={video.title} />
                <input onChange={handleChange} name='views' type="text" placeholder='view'value={video.views} />
                <button onClick={handleSubmit}>
                    {editableVideo ? 'Edit':'Add' } Video
                </button>


            </form>
        </>
    )
}

export default AddVideo


import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

// instead of giving dispatch everywhere, where value want we can create custome hook
//created custome hook 
// "use__" have to start with use, naming convention
function useVideoDispatch() {
   return useContext(VideoDispatchContext)   
}

export default useVideoDispatch

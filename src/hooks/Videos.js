import { useContext } from "react";
import VideosContext from "../context/VideosContext";

// instead of giving dispatch everywhere, where value want we can create custome hook
//created custome hook 
// "use__" have to start with use, naming convention
function useVideos() {
   return useContext(VideosContext)   
}

export default useVideos

import {persistor} from "../store/Store";
 
export const clearStatePersist = () =>{
    persistor.purge().then(()=>{
        console.log("Persisted State has been game ended")
    })
}
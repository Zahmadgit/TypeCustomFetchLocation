import { INCREMENT, SETIMAGEBACKGROUND, SETMESSAGE} from "../actions/Actions";

const initialState = {
    count: 0,
    messages: [
        "You will have a good day",
        "You will have a mediocre day",
        "You will have a bad day...",
        "You will have an AMAZING day!",
    ],
    currentMessage: "Fortune for today",
    currentBackground: "bg1", // Store only the key, not the path, require is annoying
    imageBackgrounds: {
        bg1: require("../../assets/sunny.png"),
        bg2: require("../../assets/snow.png"),
        bg3: require("../../assets/rain.png"),
        bg4: require("../../assets/cloudy.png"),
    },

}



//reducer functions
const Reducers = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case SETMESSAGE:
            return {
                ...state,
                currentMessage: action.payload
            }
        case SETIMAGEBACKGROUND:
            return {
                ...state,
                currentBackground: action.payload
            }
        default:
            return state;
    }
}


export default Reducers
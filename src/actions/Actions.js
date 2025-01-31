//action types
export const INCREMENT = 'INCREMENT'
export const SETMESSAGE = "SETMESSAGE"
export const SETIMAGEBACKGROUND = "SETIMAGEBACKGROUND"


//action creators 
export const Increment = () => ({
    type: INCREMENT,
})

export const SetMessage = (message) => ({
    type: SETMESSAGE,
    payload: message
})

export const SetBackgroundImage = (imageurl) => ({
    type: SETIMAGEBACKGROUND,
    payload: imageurl
})

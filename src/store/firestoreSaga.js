import {put, call, takeLatest, take, fork} from 'redux-saga/effects'
import firestore from '@react-native-firebase/firestore'
import {
    addUserFailure, addUserRequest, addUserSuccess,
    fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess
} from './firestoreSlice'
import { eventChannel } from 'redux-saga'

//WORK THAT SAGA BOY
//worker for adding a user
function* handleAddUser(action) {
    try{
        const {name, email} = action.payload
        yield call([firestore().collection('Users').doc(email), 'set'], {name, email})
        yield put(addUserSuccess({name, email}))
    } catch (error){
        yield put(addUserFailure(error.message))
    }
}


//helper function for making live listerner
function createChannel(){
    return eventChannel(emitter =>{
        const unsubscribe = firestore()
            .collection('Users')
            .onSnapshot(snapshot => {
                const usersList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                emitter(usersList)
            }, error => {
                emitter(new Error(error.message))
            })
            return unsubscribe //just stops working when its not required, idk mans...
    })
} 

//worker for fetching a user :D
function* handleRealTime() {
    const channel = yield call(createChannel)
    try{
        while(true){
            const users = yield take(channel)
            yield put(fetchUsersSuccess(users))
        }
    } catch (error){
        yield put(fetchUsersFailure(error.message))
    }
}



//watcher
export function* watchFirestoreSaga(){
    yield takeLatest(addUserRequest.type, handleAddUser)
    yield fork(handleRealTime) //listening for real time
}
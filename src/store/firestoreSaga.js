import {put, call, takeLatest} from 'redux-saga/effects'
import firestore from '@react-native-firebase/firestore'
import {
    addUserFailure, addUserRequest, addUserSuccess,
    fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess
} from './firestoreSlice'

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


//worker for fetching a user :D
function* handleFetchUsers() {
    try{
        const snapshot = yield call([firestore().collection('Users'), 'get'])
        const usersList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        yield put(fetchUsersSuccess(usersList))
    } catch (error){
        yield put(fetchUsersFailure(error.message))
    }
}

//watcher
export function* watchFirestoreSaga(){
    yield takeLatest(addUserRequest.type, handleAddUser)
    yield takeLatest(fetchUsersRequest.type, handleFetchUsers)
}
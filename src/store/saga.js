import { takeLatest, put, call } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import { 
    loginSuccess, 
    loginFailure, 
    signupSuccess, 
    signupFailure,
    logoutSuccess,
    logoutFailure
} from './authSlice';

// Worker Sagas
function* handleLogin(action) {
  try {
    const { email, password } = action.payload;
    const userCredential = yield call(
      [auth(), 'signInWithEmailAndPassword'],
      email,
      password
    );
    // Extract only necessary user data or else face death
    const user = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
    };
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* handleSignup(action) {
  try {
    const { email, password } = action.payload;
    const userCredential = yield call(
      [auth(), 'createUserWithEmailAndPassword'],
      email,
      password
    );
    // Extract only necessary user data or else face death
    const user = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
    };
    yield put(signupSuccess(user));
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

function* handleLogout() {
  try {
    yield call([auth(), 'signOut']);
    yield put(logoutSuccess());
  } catch (error) {
    console.error('Logout error:', error);
    yield put(logoutFailure(error.message));
  }
}

// Watcher Saga
export function* watchAuthSaga() {
  yield takeLatest('auth/loginRequest', handleLogin);
  yield takeLatest('auth/signupRequest', handleSignup);
  yield takeLatest('auth/logoutRequest', handleLogout);
}
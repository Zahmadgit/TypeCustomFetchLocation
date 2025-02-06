import { takeLatest, put, call } from "redux-saga/effects";
import { setMessage } from "./slice";

// Mock API call function, will change later i promise <3
const fetchNewMessage = async () => {
  const messages = [
    "A surprise is waiting for you!",
    "Today is a great day for new opportunities!",
    "You will receive good news soon!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

// Worker saga
function* handleFetchMessage() {
  try {
    const newMessage = yield call(fetchNewMessage);
    yield put(setMessage(newMessage));
  } catch (error) {
    console.error("Failed to fetch message:", error);
  }
}

// Watcher saga
export function* watchMessageSaga() {
  yield takeLatest("general/fetchMessage", handleFetchMessage);
}

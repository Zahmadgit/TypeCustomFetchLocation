import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import generalReducer from './dataSlice';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { watchAuthSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['count', 'messages', 'currentMessage', 'currentBackground', 'imageBackgrounds']
};
//dont need to persist auth because firebase takes care of that
const persistedReducer = persistReducer(persistConfig, generalReducer);

const Store = configureStore({
    reducer: {
        general: persistedReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(sagaMiddleware)
});

sagaMiddleware.run(watchAuthSaga);

export const persistor = persistStore(Store);
export default Store;
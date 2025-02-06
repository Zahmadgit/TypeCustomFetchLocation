import {persistReducer, persistStore} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import generalReducer from './dataSlice'
import createSagaMiddleware from 'redux-saga'
import { watchMessageSaga } from './saga';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'



const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key:"root",
    storage
}

const authPersistConfig = {
    key: "auth",
    storage,
  };

const persistedReducer = persistReducer(persistConfig, generalReducer )
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

const Store = configureStore({
    reducer:{
        general: persistedReducer,
        auth: persistedAuthReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck:{
            ignoreActions:["persist/PERSIST"]
        }}).concat(sagaMiddleware)
})

sagaMiddleware.run(watchMessageSaga)


export const persistor = persistStore(Store)
export default Store
import {persistReducer, persistStore} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import generalReducer from './dataSlice'
import createSagaMiddleware from 'redux-saga'
import { watchMessageSaga } from './saga';
import { configureStore } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig, generalReducer )


const Store = configureStore({
    reducer:{
        general: persistedReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck:{
            ignoreActions:["persist/PERSIST"]
        }}).concat(sagaMiddleware)
})

sagaMiddleware.run(watchMessageSaga)


export const persistor = persistStore(Store)
export default Store
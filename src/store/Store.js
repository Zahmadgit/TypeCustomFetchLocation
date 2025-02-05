import {combineReducers, createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import {persistReducer, persistStore} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'


const persistConfig = {
    key:"root",
    storage
}


const rootReducer = combineReducers({
    generalReducer : persistReducer(persistConfig, Reducers)

})

const Store = createStore(rootReducer);


export const persistor = persistStore(Store)
export default Store
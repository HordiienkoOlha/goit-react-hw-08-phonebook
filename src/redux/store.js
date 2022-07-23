import { configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactApi } from './contacts/contactSlice';
import filter from './contacts/reducer';
export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];


// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export  const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     [contactApi.reducerPath]: contactApi.reducer,
//     filter,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
// export const persistor = persistStore(store);

setupListeners(store.dispatch);

// export default { store, persistor };
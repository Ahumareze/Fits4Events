import '../styles/globals.css';
import { StrictMode } from 'react';

//redux components
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {createWrapper} from 'next-redux-wrapper'


//reducers
import storeReducer from '../redux/reducers/storeReducer';


const rootReducer = combineReducers({
  storeReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <StrictMode>
          <Component {...pageProps} />
        </StrictMode>
      </Provider>
    </>
  )
}

export default MyApp

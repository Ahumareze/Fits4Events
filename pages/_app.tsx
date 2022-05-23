import '../styles/globals.css';

//redux components
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import storeReducer from '../redux/reducers/storeReducer';

const rootReducer = combineReducers({
  storeReducer: storeReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

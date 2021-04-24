import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import CustomLoader from './components/custom-loader'
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import ForgotPassword from './pages/forgot-passwd';
import { pages } from './constants/strings';
import Register from './pages/register';
import React from 'react';
import Home from "./pages/home";

export default function () {
  return (
    <Provider store={store}>
      <div className="App">
        <AppContainer />
      </div>
    </Provider>
  );
}

export function App(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("isAuthenticated") == "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [])

  return (
    <>
      <CustomLoader />
      {
        isAuthenticated ?
          <Home />
          :
          props.global.selectedPage == pages.LOGIN ?
            <Login /> :
            props.global.selectedPage == pages.FORGOT_PASSWORD ?
              <ForgotPassword />
              :
              <Register />
      }
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  global: state.globalReducer,
});
const mapDispatchToProps = (dispatch) => ({

});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);



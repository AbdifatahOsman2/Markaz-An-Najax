import RingLoader from "react-spinners/RingLoader";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./screens/Home";
import Login from './screens/Login'
import Register from './screens/Register'

// sass
import Profile from "./screens/Profile";
import "./App.scss";
import "./Components/Nav.scss";
import "./screens/Home.scss";
import './screens/Login.scss';
import './screens/Register.scss'
import './screens/Profile.scss'


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <RingLoader
            id="loading"
            color={"#f50057"}
            loading={loading}
            size={100}
          />
        </div>
      ) : (
        <>
          <Switch>
            {/* components here will have no Navbar */}
            <Route path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route path="/register">
              <Register setUser={setUser}/>
            </Route>
            <>
              <Route path="/profile">
                <Profile user={user}/>
              </Route>
              <Nav user={user} setUser={setUser} />
              <Route exact path="/" component={Home} />
            </>
          </Switch>
        </>
      )}
    </div>
  );
}
export default App;
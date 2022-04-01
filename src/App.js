import { Switch } from "react-router-dom";
import LoginLayout from "./templates/LoginLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeLayout from "./templates/HomeLayout";
import Signup from "./pages/Signup";
import CreateOrder from "./pages/CreateOrder";

function App() {
  return (
    <Switch>
      <LoginLayout exact path="/signin" Component={Login} />
      <LoginLayout exact path="/signup" component={Signup} />
      <HomeLayout exact path="/home" Component={Home} />
      <HomeLayout exact path="/createorder" Component={CreateOrder} />
      <HomeLayout exact path="/" Component={Home} />
      <HomeLayout exact path="*" Component={Home} />
    </Switch>
  );
}

export default App;

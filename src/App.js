import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Header from "./Pages/Shared/Header/Header";
import ServiceInfo from "./Pages/Home/ServiceInfo/ServiceInfo";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

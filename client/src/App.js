import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";


function App() {
  return (
    <BrowserRouter>
    <MainNavigation />
      <main>
      <Switch>
        {/* <Route path="/"  element={<Users/>}></Route>    this line isn't working*/}
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact >
          <NewPlace />           
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
     </BrowserRouter>
    // <>
    //   <Link to="/"><Users/></Link>
    //   <Link to="/places/new"><NewPlace /></Link>
    // </>
    // <>
    // <MainNavigation />
    // <Users/>
    // </>
    
    
  );
}

export default App;

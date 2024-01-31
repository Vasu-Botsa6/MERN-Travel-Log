import React from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';


import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
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
        <Route path="/places/new" >
          <NewPlace />           
        </Route>
        
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

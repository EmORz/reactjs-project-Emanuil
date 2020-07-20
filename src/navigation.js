import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom'

//import Publications from './pages/publications'
// import ShareThoughtsPage from './pages/share-thoughts'
import Login from './pages/login'
import Register from './pages/register'
//import Error from './pages/error'
//import Profile from './pages/profile'
import Error from "./pages/error";

const Navigation =()=>{

    return (
        <BrowserRouter>
        <Switch>
            {/* <Route path='/' exact component={Publications}>
                
            </Route>
            <Route path='/share' component={ShareThoughtsPage}>
                
                </Route> */}

                <Route path='/login' component={Login}/>       
         
                <Route path='/register' component={Register}/>

                {/* <Route path='/profile/:userid' component={Profile}/> */}
                 <Route component={Error}/> 
        </Switch>
        
        </BrowserRouter>
    )
}

export default Navigation
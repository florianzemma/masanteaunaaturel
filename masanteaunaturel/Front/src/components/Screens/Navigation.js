import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Blog from './Blog'
import Medecinedouce from './Medecinedouce'
import Signup from './Signup'
import Home from './Home'
import Mutuelles from './Mutuelles'
import Signin from './Signin'
import DetailsArticle from'./DetailsArticle'
import Favoris from './Favoris'
export default function Navigation (){

return(
    
<Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/medecinedouce" component={Medecinedouce} />
        <Route path="/blog" component={Blog} />
        <Route path='/details' component={DetailsArticle}/>
        <Route path="/mutuelles" component={Mutuelles} />
        <Route path="/connexion" component={Signin} />
        <Route path="/favoris" component={Favoris}/>
    </Switch>
</Router>
    )
}
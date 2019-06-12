import React from 'react'
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './homePage/HomePage'
import About from './aboutPage/About'
import Gallery from './Gallery'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import AdminPage from './AdminPage'


const App = () => (
    <Router>
        <Switch>            
            <Route exact path="/" component={({ location }) => <HomePage pathName={location.pathname} /> }/>
            <Route path="/about" component={({ location }) => <About pathName={location.pathname} /> }/>
            <Route path="/gallery" component={({ location }) => <Gallery pathName={location.pathname} className='gallery' />} />
            <Route path="/login"  component={({ location, history }) => <LoginPage history={history} pathName={location.pathname}/>} />
            <Route path="/admin"  component={({ location, history }) => <AdminPage history={history} pathName={location.pathname}/>} />
            <Route path="/signup"  component={SignUpPage} />
        </Switch>
    </Router>
    
)

export default App
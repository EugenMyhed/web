import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import '../scss/_menu.scss'
import logo from '../img/logo2.png'
import { logOut } from '../actions/actions'

const styles = () => ({
   link: {
       color: '#fff',
       '&:hover':{
          color: '#f50057'
       }
   },
   selectedPage: {
      color: '#f50057'
   },
   unSelectedPage: {
     color: '#fff'
  }
});


const Menu = ({ classes, path, isLogin, logOut, isAdmin}) => (
   <header className="mainContainer">
      <Link  to="/">
         <img src={logo} alt="logo" />
      </Link>

      <div  className="menuContainer">
      <Link to="/">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === '/' ? classes.selectedPage : classes.unSelectedPage}`
               }
            >Home</Typography>
      </Link>
      <Link to="/about">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'about' ? classes.selectedPage : classes.unSelectedPage}`
               }>About</Typography>
      </Link>
      <Link to="/gallery">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'gallery' ? classes.selectedPage : classes.unSelectedPage}`
               }>Gallery</Typography>
      </Link>
      {
         isAdmin ? (
         <Link to="/admin">
            <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'admin' ? classes.selectedPage : classes.unSelectedPage}`
               }>Admin
            </Typography>
         </Link>) : null
      }
      {
         !isLogin ?(
      <Link to="/login">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'login' ? classes.selectedPage : classes.unSelectedPage}`
               }
            >Login</Typography>
      </Link>) : (
         <Button onClick={() => logOut()} variant="contained" color="secondary" className={classes.button}>Log Out</Button>)
      }
      </div>
   </header>

)


Menu.propTypes = {
   classes: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = {
   logOut
}


export default compose(
   withStyles(styles),
   connect(null, mapDispatchToProps)
)(Menu);

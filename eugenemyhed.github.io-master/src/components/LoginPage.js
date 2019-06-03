import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Menu from './Menu'

const styles = theme => ({
   loginPage: {
        display: 'flex',
        flexDirection: 'column',

   }, 
   test:{
       marginLeft: '30%',
       margin: theme.spacing.unit
   }
});

class LoginPage extends React.Component {

    // componentDidMount() {
    //     const {logIn} = this.props;
    //   this.callBackendAPI()
    //     .then(res => logIn(res.login))
    //     .catch(err => console.log(err));
    // }
    //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    // callBackendAPI = async () => {
    //   const response = await fetch('/login');
    //   const body = await response.json();
  
    //   if (response.status !== 200) {
    //     throw Error(body.message) 
    //   }
    //   return body;
    // };

    render(){
    const { history, classes, pathName } = this.props;
    const path = pathName.split('/')[1]
    return(
        <div className={classes.loginPage}>
             <Menu path={path} />
             <LoginForm className={classes.test} />
        </div>
    );
    }
}
const mapDispatchToProps = {
    signIn: () => {},
};

export default compose( 
    connect(
    null,
    mapDispatchToProps
),
withStyles(styles)
)(LoginPage);
// 
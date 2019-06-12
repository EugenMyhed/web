import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { compose } from 'recompose';
import { logined, getUser, addAdmin } from '../actions/actions';
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
    componentDidMount(){
        const { getUser } = this.props;
        axios.get('http://localhost:5000/login')
            .then( res => {
                if(res.request.status === 200){
                    getUser(res.data)
                }
            })
            .catch(err => console.error(err))
    }

    login (formData){
        const { userData, history: { push}, logined, addAdmin } = this.props
        var flag = false;

        userData.forEach(el  => {
            if(formData.email === el.email && formData.password === el.password ){
                if(el.isAdmin === true){
                    addAdmin()
                }
                logined();
                push('/gallery');
                flag=true;
            }            
            if(!flag)
                push('/login')   
        })

             
    }

    render(){
    const { history, classes, pathName, logIn } = this.props;
    const path = pathName.split('/')[1]
    return(
        <div className={classes.loginPage}>
             <Menu path={path} />
             <LoginForm onSubmit={ formData => this.login(formData)} className={classes.test}  />
        </div>
    );
    }
}
const mapDispatchToProps = {
    logined,
    getUser,
    addAdmin
};

const mapStateToProps = state => ({
    userData: state.ui.userData,
})

export default compose( 
    connect(
    mapStateToProps,
    mapDispatchToProps
),
withStyles(styles)
)(LoginPage);
// 
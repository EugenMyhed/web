import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextFormField from './forms/TextFormField';
import { required, email, passwordLength, passwordSpaceCharacters } from '../js/loginForm.validate';

const styles = theme => ({
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 2,
        backgroundColor: "#fff", 
        width: 300,
        borderRadius: 10,
        padding: 10
    },
    field: {
        margin: theme.spacing.unit * 2,
    },
    submitButton: {
        width: 220,
    },
    btnLink: {
        marginTop: theme.spacing.unit * 2,
    },
});

const LoginForm = ({ handleSubmit, classes }) => (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
        <Typography variant="h4" gutterBottom>
            Login
        </Typography>
        <Field
            name="email"
            component={TextFormField}
            type="email"
            label="Email"
            placeholder="Type email"
            className={classes.field}
        />
        <Field
            name="password"
            component={TextFormField}
            type="password"
            label="Password"
            placeholder="Type password" 
            className={classes.field}
        />
        <Button className={classes.submitButton} type="submit" variant="contained" color="primary">
            Login
        </Button>

        <Button className={classes.btnLink} component={Link} to="/signup">
            Create account
        </Button>

        <Button className={classes.btnLink} component={Link} to="/password_reset">
            Forgot password
        </Button>
    </form>
);

export default compose(
    reduxForm({
        form: 'loginForm',
    }),
    withStyles(styles),
)(LoginForm);

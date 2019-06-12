import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextFormField from './forms/TextFormField';
import {
    required,
    email,
    passwordLength,
    passwordSpaceCharacters,
    
} from './loginForm.validate';

const styles = theme => ({
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 2,
        backgroundColor: "#fff",
        padding: 10,
        width: 300,
        borderRadius: 10
    },
    field: {
        margin: theme.spacing.unit * 2,
    },
    submitButton: {
        width: 145,
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        display: 'flex',
    },
});

const SignUpForm = ({ handleSubmit, classes }) => (
    <form onSubmit={handleSubmit} className={classes.signUpForm}>
        <Typography variant="h4" gutterBottom>
            Sign up
        </Typography>
        <Field
            name="email"
            component={TextFormField}
            type="email"
            label="Email"
            placeholder="Type email"
            validate={[required, email]}
            className={classes.field}
        />
        <Field
            name="name"
            component={TextFormField}
            type="text"
            label="Name"
            placeholder="Type name"
            validate={[required]}
            className={classes.field}
        />
        <Field
            name="password"
            component={TextFormField}
            type="password"
            label="Password"
            placeholder="Type password"
            validate={[required, passwordLength, passwordSpaceCharacters]}
            className={classes.field}
        />
        <Field
            name="isAdmin"
            component={TextFormField}
            type="text"
            label="isAdmin"
            placeholder="Type true or false"
            validate={[required]}
            className={classes.field}
        />
        <div className={classes.buttonContainer}>
            <Button
                className={classes.submitButton}
                size="small"
                type="submit"
                variant="contained"
                color="primary"
            >
                Create acount
            </Button>

            <Button component={Link} to="/" size="small" className={classes.button}>
                Cancel
            </Button>
        </div>
    </form>
);

export default compose(
    reduxForm({
        form: 'signUpForm',
    }),
    withStyles(styles),
)(SignUpForm);

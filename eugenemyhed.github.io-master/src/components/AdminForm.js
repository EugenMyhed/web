import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextFormField from './forms/TextFormField';

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

const AdminForm = ({ handleSubmit, classes }) => (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
        <Typography variant="h4" gutterBottom>
            Login
        </Typography>
        <Field
            name="title"
            component={TextFormField}
            type="text"
            label="Title"
            placeholder="Type title"
            className={classes.field}
        />
        <Field
            name="description"
            component={TextFormField}
            type="text"
            label="Description"
            placeholder="Type description" 
            className={classes.field}
        />
        <Button className={classes.submitButton} type="submit" variant="contained" color="primary">
            Create post
        </Button>

       
    </form>
);

export default compose(
    reduxForm({
        form: 'adminForm',
    }),
    withStyles(styles),
)(AdminForm);

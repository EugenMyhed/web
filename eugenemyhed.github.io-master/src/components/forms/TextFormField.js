import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    input: {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
    },
});

const TextFormField = ({ input, meta: { touched, error }, className, classes, ...props }) => (
    <div className={className}>
        <TextField
            InputProps={{
                classes: {
                    input: classes.input,
                },
            }}
            {...props}
            fullWidth
            {...input}
            variant="outlined"
            error={error && touched}
            helperText={touched && error}
        />
    </div>
);

export default withStyles(styles)(TextFormField);

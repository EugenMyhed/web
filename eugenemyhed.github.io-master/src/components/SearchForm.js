import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import TextFormField from './forms/TextFormField';
import '../scss/_searchForm.scss'
import searchSex from '../js/searchSex'
import {getSex} from '../actions/actions'

const styles = theme => ({
    closeButton: {
        position: 'absolute',
        top: theme.spacing.unit + 3,
        right: theme.spacing.unit + 3,
    },

    field: {
        marginBottom: theme.spacing.unit * 2,
    },
    searchSexItem: {
        widht: 'auto',
        color: 'black',
        fontSize: 16, 
        listStyle: 'none',
        cursor: 'pointer',
    }
    
});

const SearchForm = ({
    classes,
    getValue,
    getSex
}) => (
    <form className='searchForm' >
        <Field
            onChange={(event) => getValue(event.target.value)}
            name="search"
            component={TextFormField}
            label="Search"
            placeholder="Search"
            className={classes.field}
        />
        <ul>
            {searchSex.map((el, i) => <li key={i} onClick={(event)=> getSex(event.target.childNodes[0].data)} className={classes.searchSexItem}><Typography variant="h6" >{el}</Typography></li>)}
        </ul>
        
        
    </form>
);

const mapDispatchToProps = {
    getSex
}

export default compose(
    reduxForm({
        form: 'searchForm',
    }),
    connect(null, mapDispatchToProps),
    withStyles(styles),
)(SearchForm);

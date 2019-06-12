import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import '../../scss/_title.scss'

const styles = theme => ({
    typography: {
        color: '#fff',
        textAlign: 'center'	

    }

});

const Title = ({ classes }) => (
    <div className='wrapper'>
        <Typography gutterBottom variant="h4" component="h4" className={classes.typography} >Hi There!</Typography>
        <Typography gutterBottom variant="h5" component="h5" className={classes.typography}>At vero eos et accusamus et iusto odio.</Typography>
        <Typography gutterBottom variant="h6" component="h6" className={classes.typography}>
            Gravida atcur ecuus istique orci ac sis ultricpharetra gna. 
            Donec alsuada orcnc sit ameteros. 
            Loremipsum dolor sit at consc tetuer aiing elituris fermentum tumagna. 
            Sed laoreet aliquam leo. Ut te dt elentu vel leife.
        </Typography>
        <Button variant="contained" color='secondary' >
            JOIN US NOW!
        </Button>

    </div>
)

export default withStyles(styles)(Title)
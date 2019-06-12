import React from 'react'
import Menu from '../Menu'
import { text, infoData } from '../../js/aboutInfo'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../../scss/_offer.scss'


const styles = theme => ({
    typographyColor: {
        color: '#fff'
    },
    typography:{
        fontSize: 16,
        color: '#fff'

    }
});


const OfferComponent = ({ pathName, classes, num, title, description }) => (
    <li className='offerWrapper'>
        <p className='number'>{num}</p>
        <div className='infoContainer'>
            <Typography gutterBottom variant="h5" component="h5" className={classes.typographyColor}>{title}</Typography>
            <Typography gutterBottom variant="h5" component="h5" className={classes.typography}>{description}</Typography>
        </div>
    </li>
)


export default withStyles(styles)(OfferComponent)
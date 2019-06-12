import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import {deletePost} from '../../js/axios'
import '../../scss/_post.scss'

const styles = theme => ({
    typographyColorGrey: {
        color: 'grey'
    },
    typographyColorDarkGrey: {
        color: 'darkgray',
        textAlign: 'center'	
    }

});

const HomePagePosts = ({ classes, title, description, isAdmin, id }) => (
    <li className='postWrapper'>
        {
            isAdmin ? (
                <IconButton className='closeButton'>
                    <Close onClick={() => deletePost(id)} className={classes.typographyColorGrey} />
                </IconButton>
            ): null
        }
        
        <Typography gutterBottom variant="h4" component="h4" className={classes.typographyColorGrey} >{title}</Typography>
        <Typography gutterBottom variant="h6" component="h6" className={classes.typographyColorDarkGrey}>{description}</Typography>
        <Button variant="contained" color="secondary" className={classes.button}>more</Button>

    </li>
)

export default withStyles(styles)(HomePagePosts)
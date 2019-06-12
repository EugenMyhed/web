import React from 'react'
import Menu from '../Menu'
import { text, infoData } from '../../js/aboutInfo'
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import OfferComponent from './OfferComponent'
import '../../scss/_about.scss'


const styles = theme => ({
    typographyTitle: {
        color: '#fff',
    },
    typographyDescription: {
        color: '#fff',
        fontSize: 20
    },
});


const About = ({ pathName, classes, isLogin, isAdmin }) => {
    const path = pathName.split('/')[1]

    return(
    <React.Fragment>
        <Menu isAdmin={isAdmin} isLogin={isLogin} path={path} />
        <div className='aboutWrapper'>
            <div>
                <Typography gutterBottom variant="h5" component="h5" className={classes.typographyTitle}>A FEW WORDS ABOUT US</Typography>
                <Typography gutterBottom variant="h6" component="h6" className={classes.typographyDescription}>{text}</Typography>
            </div>
            <ul>
                {
                    infoData.map(el => <OfferComponent title={el.title} num={el.id} description={el.description} key={el.id} />)
                }
            </ul>
        </div>
    </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.ui.logined,
    isAdmin: state.ui.isAdmin,

  });

export default compose(
    withStyles(styles),
    connect(mapStateToProps, null)
)(About)
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import Menu from './Menu'
import gallery from '../js/gallery'
import GalleryItem from './GalleryItem'
import SearchForm from './SearchForm'
import { getSearchFieldValue } from '../actions/actions'


const styles = theme => ({
    galleryContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const Gallery = ({ classes, pathName, getSearchFieldValue, searchValue }) => {
    const path = pathName.split('/')[1]
    const filteredGallery = gallery.filter( el => el.title.includes(searchValue))
    console.log(searchValue)
    return(
        <div>
            <Menu path={path} />
            <div className={classes.galleryContainer} >
                <SearchForm getValue={getSearchFieldValue} /> 
                <ul className='gallery'>
                    {filteredGallery.map( el => <GalleryItem title={el.title} galleryImg={el.galleryImg} description={el.description} key={el.id} />)}
                </ul>
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    getSearchFieldValue
}
  
  const mapStateToProps = (state) => ({
    searchValue: state.ui.searchValue
  });

Gallery.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Gallery);


import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pussInPink from '../img/gallery/pussInPink.jpg' 
import '../scss/_galleryItem.scss'

const GalleryItem = ({ title, galleryImg, isAdmin }) => (
    <li className='galleryItems'>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
        </Typography>
        <img className='galleryImg' src={galleryImg} alt='some img'/>

        <Button className='moreInfoBtn' variant="contained" style={{marginRight: 80}} color="secondary">More</Button>
    </li>
)

export default GalleryItem
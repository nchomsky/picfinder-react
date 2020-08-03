import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    //returning a list of images
    const images = props.images.map(image => {
        //assign key to root element that we're returning
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
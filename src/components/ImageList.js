import React from 'react';

const ImageList = (props) => {
    //returning a list of images
    //destructuring three properties we care about (alt_description, id, and urls)
    const images = props.images.map(({ alt_description, id, urls }) => {
        //assign key to root element that we're returning
        return <img alt={alt_description} key={id} src={urls.regular} />;
    });

    return (
        <div>{images}</div>
    );
};

export default ImageList;
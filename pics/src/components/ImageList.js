import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {

	// const images = props.images.map(({description, id, urls}) => {
		//add key prop to the root JSX element returned
		//return <img key={id} alt={description} src={urls.regular} />;
	// });
	
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />
	});

	return <div className="image-list"> {images} </div>
};

export default ImageList;
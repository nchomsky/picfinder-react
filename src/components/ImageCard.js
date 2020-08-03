import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        //initalizing state inside constructor
        this.state = { spans: 0 };

        // calling React.createRef() and assigning it to an instance variable
        this.imageRef = React.createRef();
    }

    //reaching into DOM
    componentDidMount() {
        //when the image loads, it then calls the setSpans method
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    //setSpans goes and gets the height of the image
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        //sets the spans to height divided by row height (which is 10 px)
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    };

    //rendering the imagecard and the image
    render() {
        //destructuring out the properties we want from this.props.image
        const { alt_description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
            </div>
        );
    }
}
export default ImageCard;
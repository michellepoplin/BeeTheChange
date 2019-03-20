
import React from "react";

// import Slider from "../components/Slider";
import Carousel from "react-bootstrap/Carousel";
// import images from "../../assets/images"
// import characters from "../../sliderimg.json"
import "./coverPic.scss";




class Slider extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1501261942928-5f1a1aec5fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="capOne">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
              alt="second slide"
            />
  
            <Carousel.Caption className="capTwo">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1548365329-c628c7005461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Third slide"
            />
  
            <Carousel.Caption className="capThree">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

// const imgUrls = [
//   "https://pmcvariety.files.wordpress.com/2016/05/spongebob-nickelodeon.jpg?w=1000&h=563&crop=1",
//   "https://assets.teenvogue.com/photos/5c66f5aae78cdb389d7a3138/16:9/w_1280,c_limit/hero-spongebob-squarepants.jpg"
	
// ];

// class Carousel extends React.Component {

// 	shuffle = () => {
//         for (var i = characters.length - 1; i > 0; i--) {
//             var j = Math.floor(Math.random() * (i + 1));
//             var temp = characters[i];
//             characters[i] = characters[j];
//             characters[j] = temp;
//         }
//         console.log(this.characters)
//         return;

//     }

// 	constructor (props) {
// 		super(props);
		
// 		this.state = {
// 			currentImageIndex: 0
// 		};
		
// 		this.nextSlide = this.nextSlide.bind(this);
// 		this.previousSlide = this.previousSlide.bind(this);
// 	}
	
// 	previousSlide () {
// 		const lastIndex = characters.length - 1;
// 		const { currentImageIndex } = this.state;
// 		const shouldResetIndex = currentImageIndex === 0;
// 		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
// 		this.setState({
// 			currentImageIndex: index
// 		});
// 	}
	
// 	nextSlide () {
// 		const lastIndex = characters.length - 1;
// 		const { currentImageIndex } = this.state;
// 		const shouldResetIndex = currentImageIndex === lastIndex;
// 		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

// 		this.setState({
// 			currentImageIndex: index
// 		});
// 	}
	
// 	render () {
// 		return (
// 			<div className="carousel">
// 				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
// 				<ImageSlide url={ characters[this.state.currentImageIndex] } />
// 				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
// 			</div>
// 		);
// 	}
// }

// const Arrow = ({ direction, clickFunction, glyph }) => (
// 	<div 
// 		className={ `slide-arrow ${direction}` } 
// 		onClick={ clickFunction }>
// 		{ glyph } 
// 	</div>
// );

// const ImageSlide = ({url}) => {
// 	const styles = {
// 		backgroundImage: `url(${url})`,
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center'
// 	};
	
// 	return (
// 		<div className="image-slide" style={styles}></div>
// 	);
// }

// ReactDOM.render(
//   <Carousel />,
//   document.getElementById('container')
// );


  export default Slider;
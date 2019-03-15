
import React from "react";

// import Slider from "../components/Slider";
// import Carousel from "react-bootstrap/Carousel";

import "./coverPic.scss";


// function ControlledCarousel() {
//     return (
//        <div>
//          <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://picsum.photos/200/300"
//                 alt="First slide"
//               />
//             <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://picsum.photos/200/300"
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="https://picsum.photos/200/300"
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//        </div>
      
//     );
// }

// export default ControlledCarousel;




// class Slider extends React.Component {
//     constructor(props, context) {
//       super(props, context);
  
//       this.handleSelect = this.handleSelect.bind(this);
  
//       this.state = {
//         index: 0,
//         direction: null,
//       };
//     }
  
//     handleSelect(selectedIndex, e) {
//       this.setState({
//         index: selectedIndex,
//         direction: e.direction,
//       });
//     }
  
//     render() {
//       const { index, direction } = this.state;
  
//       return (
//         <Carousel
//           activeIndex={index}
//           direction={direction}
//           onSelect={this.handleSelect}
//         >
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://picsum.photos/800/400"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://picsum.photos/800/400"
//               alt="second slide"
//             />
  
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://picsum.photos/800/400"
//               alt="Third slide"
//             />
  
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       );
//     }
//   }

const imgUrls = [
  "https://pmcvariety.files.wordpress.com/2016/05/spongebob-nickelodeon.jpg?w=1000&h=563&crop=1",
  "https://assets.teenvogue.com/photos/5c66f5aae78cdb389d7a3138/16:9/w_1280,c_limit/hero-spongebob-squarepants.jpg"
	
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({url}) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}

// ReactDOM.render(
//   <Carousel />,
//   document.getElementById('container')
// );


  export default Carousel;
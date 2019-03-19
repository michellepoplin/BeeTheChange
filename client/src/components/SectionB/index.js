// import React from "react";
// import './SectionB.scss';
// import Media from "react-bootstrap/Media";



// function SectionB() {
//   return (
//     <Media>
//      <img
//        className="d-block w-100"
//         src="https://images.unsplash.com/photo-1548365329-c628c7005461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
//         alt="Third slide"
//       />
//       <Media.Body className="capOne">
//         <h1>Caption</h1>
//         <p>BEES ARE AWESOME</p>
//       </Media.Body>

//     </Media>
   
  
    
  
//   );
// }

// export default SectionB;


import React from "react";
import './SectionB.scss';


function SectionB(props) {
    return (
<section className="SectionB">
  {props.children}

  <div id="capB">
  <p>I like BEES!</p>
</div>
</section>




);
}

export default SectionB;

import React from "react";
import './Usercover.scss';



function Usercover(props) {
    return (
<section className="userCover">
  {props.children}
</section>
);
}

export default Usercover;
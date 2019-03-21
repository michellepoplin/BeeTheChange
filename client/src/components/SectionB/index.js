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

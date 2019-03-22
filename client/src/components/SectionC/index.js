import React from "react";
import './SectionC.scss';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';



function SectionC(props) {
  return (
    <section>
      <ButtonToolbar className="bttnGroup">
      {props.children}
      </ButtonToolbar>
    </section>
  );
}

export default SectionC;

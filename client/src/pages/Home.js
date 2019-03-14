
import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import ControlledCarousel from "../components/ControlledCarousel/ControlledCarousel";
import SectionA from "../components/SectionA";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";


class Home extends Component {
    render() {
        return (
            <Wrapper>
                <FrontNav />
                <ControlledCarousel />
                {/* <SectionA  /> */}
                {/* <Footer />  */}
            </Wrapper>
        )
    };
    };
    export default Home;
    

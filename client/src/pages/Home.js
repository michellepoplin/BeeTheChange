
import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import Slider from "../components/Slider/Slider";
import SectionA from "../components/SectionA";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";


class Home extends Component {
    render() {
        return (
            <Wrapper>
                <FrontNav />
                <Slider />
                {/* <SectionA  /> */}
                {/* <Footer />  */}
            </Wrapper>
        )
    };
    };
    export default Home;
    

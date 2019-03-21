import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import API from "../utils/API";

class Search extends Component {
    state = {
        farmers: [],
    };

    componentDidMount() {
        API.getFarmers()
            .then(res => this.setState({ farmers: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Wrapper>
                <Nav />
                <h1 className="text-center">Search for a Farmer!</h1>
                { this.state.farmers.map(farmer => (<div key={farmer.id}>{farmer.name}</div>)) }
                <Footer />
            </Wrapper>
        );
    }
}

export default Search;

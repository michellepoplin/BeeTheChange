import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const farmers = [
    {
        id: 'farmer11',
        farmer: 'Test farmer 1',
    },
    {
        id: 'farmer12',
        farmer: 'Test farmer 2',
    },
    {
        id: 'farmer13',
        farmer: 'Test farmer 3',
    },
    {
        id: 'farmer14',
        farmer: 'Test farmer 4',
    },
    {
        id: 'farmer15',
        farmer: 'Test farmer 5',
    }
];

class Farmsearch extends Component {
    state = {
        search: "",
        farmers: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getFarmerList()
            .then(res => this.setState({ farmers: res.data.farmer }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getFarmers(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.farmer);
                }
                this.setState({ results: res.data.farmer, error: "" });
            })
            .catch(err => this.setState({ error: err.farmer }));
    };

    render() {
        return (
            <div>
                <Container>
                    <Nav />
                    <h1 className="text-center">Search for a Farmer!</h1>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        farmers={this.state.farmers}
                    />
                    <SearchResults farmers={farmers} />
                    <Footer />
                </Container>
            </div>
        );
    }
}

export default Farmsearch;

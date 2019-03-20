import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Farmsearch extends Component {
    state = {
        search: "",
        farmers: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getFarmerList()
            .then(res => this.setState({ farmers: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getFarmersOfName(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
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
                    <SearchResults results={this.state.results} />
                    <Footer />
                </Container>
            </div>
        );
    }
}

export default Search;


export default Farmsearch;
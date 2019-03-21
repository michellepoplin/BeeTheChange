import React from "react";
<<<<<<< HEAD
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
=======
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {
  return (
    <Form inline className="search" action="/search" onSubmit={props.handleFormSubmit}>
      <FormControl type="text" name="name" placeholder="Find A Hive To Sponsor" className="mr-sm-2" />
        <div className="form-group">
          <Button variant="outline-info" type="submit" className={"MainNavButt"}>
            Search
          </Button>
        </div>
    </Form>
  );
}

export default SearchForm;
>>>>>>> f1068dba5f5a77974a2c071d9bd3a69629c134cb

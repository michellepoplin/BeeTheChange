import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// Using the datalist element we can create autofill suggestions based on the props.farms array
function SearchForm(props) {
  return (
    <Form inline className="search">
      <FormControl type="text" placeholder="Find A Hive To Sponsor" className="mr-sm-2" />
        <div className="form-group">
          <label htmlFor="farmer">Farmer Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="farmer"
            list="farmers"
            type="text"
            className="form-control"
            placeholder="Type a Farmer in to begin"
            id="farmer"
          />
          <datalist id="farmer">
            {props.Farmers.map(farmer => (
              <option value={farmer} key={farmer} />
            ))}
          </datalist>
          <Button variant="outline-info" type="submit" onClick={props.handleFormSubmit} className={"MainNavButt"}>
            Search
          </Button>
        </div>
    </Form>
  );
}

export default SearchForm;

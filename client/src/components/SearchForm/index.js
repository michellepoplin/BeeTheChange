import React from "react";
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

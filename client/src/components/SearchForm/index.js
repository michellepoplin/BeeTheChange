import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.farms array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="farm">Farmer Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="farmers"
          list="Farmers"
          type="text"
          className="form-control"
          placeholder="Type a Farmer in to begin"
          id="Farmers"
        />
        <datalist id="farmers">
          {props.farmerss.map(farmers => (
            <option value={farmers} key={farmers} />
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

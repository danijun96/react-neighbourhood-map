import React, { Component } from 'react';

const listGroupItem = {
  listStyleType: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem'
};
const listGroup = {
  maxHeight: '85vh',
  overflow: 'scroll'
}

class SearchBar extends Component {
	render() {
    const { places, query, selectPlace } = this.props;

	return (
    <div className="container">
			<div className="input-group">
        <input
					type="text"
					className="form-control"
					placeholder="Search by name ..."
					aria-label="Search Input"
					onChange={(event) => {
						query(event.target.value);
					}}
				/>
      </div>
      <div style={listGroup}>
        <ul className="list-group"
        >
          {places!==undefined && places.map(place => (
            <li
              className="list-group-item list-group-item-action"
              tabIndex="0"
              key={place.id}
              style={listGroupItem}
              onClick={() => selectPlace(place)}>
              <span>{place.name}</span>
            </li>
          ))}</ul>
      </div>
    </div>
    );
  }
}

export default SearchBar

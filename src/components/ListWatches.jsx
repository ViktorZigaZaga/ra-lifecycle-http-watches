import React from "react";
import Watch from "./Watch";
import PropTypes from 'prop-types';

function ListWatches({ listWatches, onDelete }) {

  return (
    <ul className="list-watches">
      {listWatches.map((item, i) => 
          <li className="list-item" key={Date.now() + i*3}>
            <Watch watch={item} onDelete={onDelete} />   
          </li> 
      )}
    </ul>
  );
}

ListWatches.propTypes = {
  listWatches: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ListWatches
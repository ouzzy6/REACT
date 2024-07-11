import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const FilteredList = ({ list }) => {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>
          {item.name} - {item.age} años
        </li>
      ))}
    </ul>
  );
};

FilteredList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FilteredList;

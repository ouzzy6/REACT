import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ background: 'white', border: '1px solid red', padding: '10px' }}>
      <h2 style={{ cursor: 'pointer' }} onClick={handleTitleClick}>
        {title}
      </h2>
      {!isCollapsed && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;

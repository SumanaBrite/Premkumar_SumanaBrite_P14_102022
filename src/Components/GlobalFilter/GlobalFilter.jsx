import React from 'react';
import PropTypes from 'prop-types';

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
            Search :{' '}
            <input
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    );
};

GlobalFilter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
};

export default GlobalFilter;

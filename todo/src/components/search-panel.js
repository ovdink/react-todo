import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px',
    }
    return <input style={searchStyle} className='form-control mb-2' placeholder={searchText} />;
};

export default SearchPanel;
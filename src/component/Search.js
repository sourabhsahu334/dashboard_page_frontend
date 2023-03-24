import React from 'react'

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  return (
    <div>
         <div className="sidebar-search">
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
      </div>
    </div>
  )
}

export default Search
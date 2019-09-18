import React from 'react';

const Navbar = ({ handleSearchChange, handleSearchSubmit }) => (
  <nav>
    <form onSubmit={handleSearchSubmit}>
      <input
        onChange={handleSearchChange}
        className="input"
        type="text"
        placeholder="Text input"
      />
      <input type="submit" value="Select" className="button" />
    </form>
  </nav>
);

export default Navbar;

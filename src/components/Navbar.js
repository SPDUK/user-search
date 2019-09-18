import React, { Component } from 'react';
import Select from 'react-select';

class Navbar extends Component {
  state = {
    selectedOption: null,
  };

  handleSelectChange = selectedOption => {
    // update UI state
    this.setState({
      selectedOption,
    });
    // run parent function to pass selected option
    this.props.handleSearchChange(selectedOption);
  };

  render() {
    const { handleSearchSubmit, users } = this.props;
    const { selectedOption } = this.state;

    return (
      <nav>
        <form onSubmit={handleSearchSubmit}>
          <Select
            className="select"
            isSearchable
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={users.map(({ id, name }) => ({ value: id, label: name }))}
            type="submit"
          />
          <input type="submit" value="Select" className="button" />
        </form>
      </nav>
    );
  }
}

export default Navbar;

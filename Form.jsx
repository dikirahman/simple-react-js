  import React, { Component } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      nama: '',
      hobi: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
            [name]: value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { nama, hobi } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
      <div className="form-group">
          <label for="nama">Nama</label>
          <input type="text" className="form-control" name = "nama"
          id = "nama"
          value = { nama }
          onChange = { this.handleChange }
          />
         </div>
      <div className="form-group">
          <label for="hobi">Hobi</label>
          <input type="text" className="form-control" name = "hobi"
          id = "hobi"
          value = { hobi }
          onChange = { this.handleChange }
          />
         </div>
              
               
                <button type="submit" class="btn btn-primary">
                    Tambah
                </button>
                
               
            </form>
    );
  }
}

export default Form;
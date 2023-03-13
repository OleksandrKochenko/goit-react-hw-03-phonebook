import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  nameId = shortid.generate();
  telId = shortid.generate();

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tel: '' });
  };

  render() {
    return (
      <form
        style={{ border: '1px solid black', padding: '20px', width: '400px' }}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor={this.nameId}>Name</label>
        <br />
        <input
          style={{ backgroundColor: 'darkgray' }}
          type="text"
          value={this.state.name}
          name="name"
          id={this.nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label htmlFor={this.telId}>Phone</label>
        <br />
        <input
          style={{ backgroundColor: 'darkgray' }}
          type="tel"
          value={this.state.tel}
          name="tel"
          id={this.telIdId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          style={{
            padding: '5px',
            color: '#010101',
            backgroundColor: 'darkgray',
            fontWeight: '700',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

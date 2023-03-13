import React, { Component } from 'react';
import ContactForm from './form';
import ContactList from './contact_list';
import Filter from './filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          color: '#010101',
          backgroundColor: 'darkgray',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts:</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} />
      </div>
    );
  }
}

export default App;

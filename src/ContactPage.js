import React from 'react'
import Form from './Form'

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <Form onSubmit={this.submit} />
  }
}

export default ContactPage;
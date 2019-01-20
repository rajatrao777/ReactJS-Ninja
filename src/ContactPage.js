import React from 'react'
import Form from './Form'

class ContactPage extends React.Component {
  submit = e => {
    // print the form values to the console
    console.log(e)
  }
  render() {
      console.log("First")
    return <Form onSubmit={this.submit} />
  }
}

export default ContactPage;
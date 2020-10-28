import React, {Component} from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Banner from './banner';


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <Nav/>
            <Header/>
            <Banner/>
            <form onSubmit={this.handleSubmit} className="contact_form">
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label><br/>
           
            <input type="submit" value="Submit" />
            </form>
            <Footer/>
        </div>
       
      );
    }
  }

  export default Contact;
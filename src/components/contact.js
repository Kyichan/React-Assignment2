import React, {Component} from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Banner from './banner';


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        telnum: '',
        email:'',
        agree: false,
        contactType:'Tel.',
        message:'',
        touched: {
          firstname: false,
          lastname: false,
          telnum: false,
          email: false
      }
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);  
      this.handleBlur = this.handleBlur.bind(this);
    
    }
    handleBlur = (field) => (evt) => {
      this.setState({
          touched: { ...this.state.touched, [field]: true }
      });
  }

  validate(firstname, lastname, telnum, email) {
      const errors = {
          firstname: '',
          lastname: '',
          telnum: '',
          email: ''
      };

      if (this.state.touched.firstname && firstname.length < 3)
          errors.firstname = 'First Name should be >= 3 characters';
      else if (this.state.touched.firstname && firstname.length > 10)
          errors.firstname = 'First Name should be <= 10 characters';

      if (this.state.touched.lastname && lastname.length < 3)
          errors.lastname = 'Last Name should be >= 3 characters';
      else if (this.state.touched.lastname && lastname.length > 10)
          errors.lastname = 'Last Name should be <= 10 characters';

      const reg = /^\d+$/;
      if (this.state.touched.telnum && !reg.test(telnum))
          errors.telnum = 'Tel. Number should contain only numbers';

      if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
          errors.email = 'Email should contain a @';

      return errors;
  }
    handleInputChange(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    handleSubmit(event){
      console.log("Current State is: " + JSON.stringify(this.state));
      alert("Current State is: " + JSON.stringify(this.state));
      event.preventDefault();
    }
  
    
    render() {
      const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
      return (
        <div>
            <Nav/>
            <Header/>
            <Banner/>
            <form className="contact_form" onSubmit={this.handleSubmit}>
            <label htmlFor="firstname">
                First Name:
                <input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}  valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange} />
                {errors.firstname}
            </label><br/>
            <label htmlFor="lastname">
                Last Name:
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}  onChange={this.handleInputChange} />
               {errors.lastname}
            </label><br/>
            <label htmlFor="lastname">
                Contact:
                <input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum}  valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}  onChange={this.handleInputChange} />
                {errors.telnum}
            </label><br/>
            <label htmlFor="email">
                Email:
                <input type="email" id="email" name="email" placeholder="Email" value={this.state.email}  valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')} onChange={this.handleInputChange} />
                 {errors.email}
            </label><br/>
            <label check>                
                <input type="checkbox" name="agree" checked={this.state.agree}  onChange={this.handleInputChange} />{' '}
                <strong>May we contact you?</strong>
            </label><br/>
            <label>  
                     
                <select type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                <option>Tel.</option>
                <option>Email</option>
                </select>
            </label><br/>
            <label htmlFor="feedback">                
                <input rows="12" type="textarea" id="message" name="message" value={this.state.message} onChange={this.handleInputChange}  />
                
            </label><br/>
           
            <input type="submit" value="Submit" />
            </form>
            <Footer/>
        </div>
       
      );
    }
  }

  export default Contact;
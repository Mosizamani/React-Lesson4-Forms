import { useState } from 'react'
import './App.css'
import FormField from './FormField'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    dob: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function to check if the form is valid
  const validate = () => {
    let tempErrors = {};

    // Check if the first name is empty
    if ((!typeof formData.firstName === "string")) {
      tempErrors.firstName = 'First name must be a string'
    }

    if ( formData.firstName.length < 2) {
      tempErrors.firstName = 'First name must be at least 2 characters'
    }

    const yearOfBirth = new Date(formData.dob).getFullYear()

    if(yearOfBirth > new Date().getFullYear()- 19) {
      tempErrors.dob = "You must be older than 19 years!"
    }

    // Check if the email is valid
    if (!formData.email.includes('@')) {
      tempErrors.email = 'Invalid Email address'
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log('Form submitted successfully')
      console.log(formData)
    } else {
      console.log('Form has some errors');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          type="text"
          handleChange={handleChange}
          error={errors.firstName} 
        />

        <FormField
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          type="email"
          handleChange={handleChange}
          error={errors.email}
        />
        <br/>
        <FormField
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          type="date"
          handleChange={handleChange}
          error={errors.dob}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App

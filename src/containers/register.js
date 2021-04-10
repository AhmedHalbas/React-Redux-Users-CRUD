/* eslint-disable no-useless-escape */
import useForm from '../custom/use-form-hook';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router';
import { Button, Form } from 'react-bootstrap-v5';
import { useState } from 'react';
const Register = (props) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const [
    image,
    setUsername,
    setEmail,
    setImage,
    usernameError,
    emailError,
  ] = useForm();

  const handleSave = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();

      const user = {
        userName: event.target.username.value,
        email: event.target.email.value,
        city: event.target.city.value,
        imageLink: image,
      };
      console.log('before await');

      await props.registerUser(user);
      console.log('after await');

      console.log('status: ', props.response);
      history.replace('/');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='bg-dark w-50  p-3 rounded-3'>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSave}
          className='row g-3   w-75 mx-auto fw-bold text-secondary fw-bolder '>
          <Form.Group className='mb-3' controlId='validationCustom01'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              type='text'
              name='username'
              placeholder='Enter User Name'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Form.Text className='text-muted'>
              {usernameError && <p>{usernameError}</p>}
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='validationCustom02'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Enter Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className='text-muted'>
              {emailError && <p>{emailError}</p>}
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='validationCustom02'>
            <Form.Label>City</Form.Label>
            <Form.Select defaultValue='Choose City' name='city' required>
              <option disabled>Choose City</option>
              <option>Cairo</option>
              <option>Giza</option>
              <option>Alex</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId='val'>
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              required
              type='file'
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Form.Group>

          <Button className='col-3 mx-auto' variant='primary' type='submit'>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      response: state.users.response,
    };
  },
  (dispatch) => {
    return bindActionCreators({ registerUser }, dispatch);
  }
)(Register);

import useForm from '../../custom/use-form-hook';
import { Button, Modal, Form } from 'react-bootstrap-v5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserByID } from '../../actions/index';
import { useState } from 'react';
import { useHistory } from 'react-router';

const EditUserData = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [, setUsername, setEmail, , usernameError, emailError] = useForm();

  const history = useHistory();

  const confirmUpdate = async (event) => {
    event.preventDefault();

    const user = {
      userName: event.target.username.value,
      email: event.target.email.value,
      city: event.target.city.value,
    };
    await props.updateUserByID(props.userData.id, user);
    console.log('Update status: ', props.updateResponse);
    history.replace('/');
  };

  return (
    <div className='col-6'>
      <button
        className='btn btn-dark rounded-pill col-6 m-2'
        onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit {props.userData?.userName}'s Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={confirmUpdate}
            id='myform'
            className='row g-3   w-75 mx-auto fw-bold text-secondary fw-bolder '>
            <Form.Group className='mb-3' controlId='validationCustom01'>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                required
                type='text'
                name='username'
                defaultValue={props.userData?.userName}
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
                defaultValue={props.userData?.email}
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
              <Form.Select
                defaultValue={props.userData?.city}
                name='city'
                required>
                <option disabled>Choose City</option>
                <option>Cairo</option>
                <option>Giza</option>
                <option>Alex</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button form='myform' type='submit' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      updateResponse: state.users.updateResponse,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        updateUserByID,
      },
      dispatch
    );
  }
)(EditUserData);

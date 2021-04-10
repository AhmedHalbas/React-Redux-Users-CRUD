/* eslint-disable jsx-a11y/alt-text */
import useForm from '../../custom/use-form-hook';
import { Button, Modal, Form } from 'react-bootstrap-v5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeProfileByID } from '../../actions/index';
import { useState } from 'react';
import { useHistory } from 'react-router';

const EditUserImage = (props) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const history = useHistory();

  const [image, , , setImage, ,] = useForm();

  const confirmProfileChange = async () => {
    handleCloseProfile();
    if (image !== '') {
      const user = {
        email: props.userData.email,
        imageLink: image,
      };

      await props.changeProfileByID(props.userData.id, user);
      history.replace('/');
    }
  };

  return (
    <div className='col-8 text-end w-25'>
      <div>
        <img className='img-fluid' src={props.userData.imageLink}></img>
        <div className='text-center'>
          <button className='btn btn-dark m-2' onClick={handleShowProfile}>
            Change Profile
          </button>
        </div>
      </div>

      <Modal show={showProfile} onHide={handleCloseProfile}>
        <Modal.Header>
          <Modal.Title>
            Change {props.userData?.userName}'s Profile Picture
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='formFile ' className='form-label  '>
              Profile Picture
            </label>
            <input
              className='form-control rounded-pill'
              type='file'
              name='myImage'
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              id='formFile'
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseProfile}>
            Close
          </Button>
          <Button type='button' onClick={confirmProfileChange}>
            Proceed
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
        changeProfileByID,
      },
      dispatch
    );
  }
)(EditUserImage);

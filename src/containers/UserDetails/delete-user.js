import useForm from '../../custom/use-form-hook';
import { Button, Modal, Form } from 'react-bootstrap-v5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUserByID } from '../../actions/index';
import { useState } from 'react';
import { useHistory } from 'react-router';

const DeleteUser = (props) => {
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const history = useHistory();

  const confirmDeletion = async () => {
    handleCloseDelete();
    await props.deleteUserByID(props.userData);
    console.log('Deletion status: ', props.deleteResponse);
    history.replace('/');
  };

  return (
    <div className='col-6'>
      <button
        className='btn btn-dark rounded-pill col-6 m-2'
        onClick={handleShowDelete}>
        Delete
      </button>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you Sure you Want To Delete {props.details?.userName}'s Profile
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseDelete}>
            Close
          </Button>
          <Button type='button' onClick={confirmDeletion}>
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
      deleteResponse: state.users.deleteResponse,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        deleteUserByID,
      },
      dispatch
    );
  }
)(DeleteUser);

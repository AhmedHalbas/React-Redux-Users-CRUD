import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditUserData from './edit-user-data';
import DeleteUser from './delete-user';
import EditUserImage from './edit-user-image';
import { getUserDetailsByID, clearUserDetails } from '../../actions/index';
import { Spinner } from 'react-bootstrap-v5';

const UserDetails = (props) => {
  useEffect(() => {
    console.log('ID:' + props.match.params.id);
    props.getUserDetailsByID(props.match.params.id);

    return () => {
      props.clearUserDetails();
    };
  }, []);

  const renderUserDetails = ({ details }) => {
    console.log('Details:', details);
    if (details && details.length) {
      return (
        <div>
          <div className='row d-flex justify-content-between p-5 d-flex-md-column'>
            <div className='col-4'>
              <p className='fs-1 fw-bolder'>{details[0].userName}</p>
              <p className='fs-3'>{details[0].email}</p>
              <p className='fs-3'>{details[0].country}</p>
            </div>

            <EditUserImage userData={details[0]} />
          </div>

          <div className='row  p-5  d-flex text-center'>
            <EditUserData userData={details[0]} />

            <DeleteUser userData={details[0]} />
          </div>
        </div>
      );
    }
    return (
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  };

  return <div>{renderUserDetails(props)}</div>;
};

export default connect(
  (state) => {
    return {
      details: state.users.details,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      {
        getUserDetailsByID,
        clearUserDetails,
      },
      dispatch
    );
  }
)(UserDetails);

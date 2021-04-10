import { connect } from 'react-redux';
import User from '../../components/user';
import { clearUsers } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap-v5';
const Users = (props) => {
  useEffect(() => {
    return () => {
      // console.log('left');
      props.clearUsers();
    };
  }, []);
  const renderUsers = ({ users }) => {
    if (users && users.length) {
      return (
        <div className='row row-cols-3 mx-auto w-75 '>
          {users.map((user) => {
            return <User key={user.id} userData={user} />;
          })}
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

  return (
    <div className='border border-5 border-dark rounded-3 m-5 d-flex justify-content-center flex-column align-items-center'>
      <h2 className='my-4 fw-bold fs-2'>Users List</h2>

      {renderUsers(props)}
    </div>
  );
};

export default connect(
  (state) => {
    return {
      users: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators({ clearUsers }, dispatch);
  }
)(Users);
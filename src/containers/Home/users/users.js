import { connect } from 'react-redux';
import User from '../../../components/user/user';
import { clearUsers } from '../../../actions/index';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap-v5';
import { PaginatedList } from 'react-paginated-list';
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
        <PaginatedList
          loadingItem={<div>Loadng</div>}
          list={users}
          itemsPerPage={6}
          renderList={(list) => (
            <>
              <div className='row row-cols-xl-3 d-flex justify-content-center row-cols-md-2 row-cols-1  '>
                {list.map((item, id) => {
                  return <User key={id} userData={item} />;
                })}
              </div>
            </>
          )}
        />
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

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserByName } from '../../actions/index';

const UserFilter = (props) => {
  const [userName, setUserName] = useState('');

  //const brandRef = useRef();

  useEffect(() => {
    //console.log("useeffect");
    props.getUserByName(userName);
  }, [userName]);
  return (
    <div className='col-12'>
      <div className='form-group '>
        <input
          type='text'
          //ref={brandRef}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder='Filter By Name'
          className='form-control rounded-pill mx-auto text-center m-5 w-50'
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUserByName }, dispatch);
};

export default connect(null, mapDispatchToProps)(UserFilter);

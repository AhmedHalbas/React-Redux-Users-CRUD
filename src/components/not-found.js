import { Alert } from 'react-bootstrap-v5';

const NotFound = () => {
  return (
    <div className='overflow'>
      <div className=' d-flex justify-content-center align-items-center min-vh-100'>
        <Alert className='fs-2' variant='danger'>
          Error 404 Page Not Found
        </Alert>
      </div>
    </div>
  );
};
export default NotFound;

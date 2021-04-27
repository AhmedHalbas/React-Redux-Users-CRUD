/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap-v5';
import './user.css';
const User = ({ userData }) => {
  return (
    <div className='g-5 text-center d-flex justify-content-center image'>
      <Link to={`/users/${userData.id}`}>
        <Card
          style={{ width: '18rem' }}
          className='border-dark text-white bg-dark m-3 '>
          <Card.Img
            loading='lazy'
            variant='top'
            src={userData?.imageLink}
            width='200'
            height='200'
          />
          <Card.Body>
            <Card.Title>{userData.userName}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default User;

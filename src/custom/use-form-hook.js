import { useEffect, useState } from 'react';

const useForm = () => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  // *we can also set error messages to display to the user
  const [usernameError, setUserNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  // *set initial state value(s) for example:
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  // *for every change in our state this will be fired
  useEffect(() => {
    // *we want to skip validation on first render

    //* in a call to the validation function
    formValidation();
  }, [username, email]); // eslint-disable-line react-hooks/exhaustive-deps
  // *any state variable(s) included in here will trigger the effect to run
  //* here we run any validation
  const formValidation = () => {
    if (username.length && username.length < 5) {
      setUserNameError('must be at least 5 characters long!');
    } else {
      setUserNameError(null);
    }

    if (email.length && !validEmailRegex.test(email)) {
      setEmailError('Email is not valid!');
    } else {
      setEmailError(null);
    }
  };

  return [image, setUsername, setEmail, setImage, usernameError, emailError];
};

export default useForm;

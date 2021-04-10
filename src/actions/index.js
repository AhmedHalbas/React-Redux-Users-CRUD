import axios from 'axios';
import { storage } from '../utils/firebase-config';

const baseURL = 'http://localhost:3000/api/users';
const registerURL = 'http://localhost:3000/api/user/register';

export async function getUserByName(userName = '') {
  let payload = null;
  try {
    let response = await axios.get(`${baseURL}?name_like=${userName}`);
    payload = response.data;
    console.log('Payload:', payload);
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'USERS_LIST',
    payload,
  };
}

export async function getUserDetailsByID(id = 0) {
  let payload = null;
  try {
    let response = await axios.get(`${baseURL}/${id}`);
    payload = response.data;
    console.log('payload', payload);
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'USER_DETAILS',
    payload,
  };
}

export async function deleteUserByID(id = 0) {
  let payload = null;
  try {
    let response = await axios.delete(`${baseURL}/${id}`);
    payload = response;
    console.log('payload', payload);
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'USER_DELETION_STATUS',
    payload,
  };
}

export async function changeProfileByID(id = 0, user = {}) {
  let payload = null;
  const storageRef = storage.ref();
  const fileRef = storageRef.child(user.email);
  const uploadedImage = fileRef.put(user.imageLink);

  await new Promise(function (resolve, reject) {
    uploadedImage.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert(error);
        reject(error);
      },
      () => {
        const image = uploadedImage.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            user.imageLink = url;
          });
        resolve(image);
      }
    );
  }).then(() => {
    try {
      let response = axios.patch(`${baseURL}/${id}/changeProfile`, {
        imageLink: user.imageLink,
      });
      payload = response;
      console.log('payload', payload);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  });

  return {
    type: 'USER_UPDATE_STATUS',
    payload,
  };
}

export async function updateUserByID(id = 0, user = {}) {
  console.log('user: ', user);
  let payload = null;

  try {
    let response = await axios.put(`${baseURL}/${id}`, user);
    payload = response;
    console.log('payload', payload);
  } catch (error) {
    console.log('ERROR: ', error);
  }

  return {
    type: 'USER_UPDATE_STATUS',
    payload,
  };
}

export async function registerUser(user = {}) {
  console.log('user: ', user);
  let payload = null;
  const storageRef = storage.ref();
  const fileRef = storageRef.child(user.email);
  const uploadedImage = fileRef.put(user.imageLink);

  await new Promise(function (resolve, reject) {
    uploadedImage.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert(error);
        reject(error);
      },
      () => {
        const image = uploadedImage.snapshot.ref
          .getDownloadURL()
          .then((url) => {
            user.imageLink = url;
          });
        resolve(image);
      }
    );
  }).then(() => {
    try {
      let response = axios.post(registerURL, user);
      payload = response;
      console.log('payload', payload);
    } catch (error) {
      console.log('ERROR: ', error);
    }
  });

  return {
    type: 'USER_REGISTER_STATUS',
    payload,
  };
}

export function clearUserDetails() {
  return {
    type: 'CLEAR_DETAILS',
    payload: null,
  };
}

export function clearUsers() {
  return {
    type: 'CLEAR_LIST',
    payload: null,
  };
}

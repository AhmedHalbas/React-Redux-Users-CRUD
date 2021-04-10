export function users(state = {}, action) {
  switch (action.type) {
    case 'USERS_LIST': {
      return { ...state, list: action.payload };
    }
    case 'USER_DETAILS': {
      return { ...state, details: action.payload };
    }
    case 'CLEAR_DETAILS': {
      return { ...state, details: action.payload };
    }

    case 'CLEAR_LIST': {
      return { ...state, list: action.payload };
    }

    case 'USER_REGISTER_RESPONSE': {
      return { ...state, response: action.payload };
    }

    case 'USER_UPDATE_STATUS': {
      return { ...state, updateResponse: action.payload };
    }

    case 'USER_DELETION_STATUS': {
      return { ...state, deleteResponse: action.payload };
    }

    default: {
      return state;
    }
  }
}

const initialState = {
    isAuthenticated: false,
    email: null,
    apiKey: null,
  };
  
  const authReducer = (state = initialState, action: { type: any; payload: { email: any; apiKey: any; }; }) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          email: action.payload.email,
          apiKey: action.payload.apiKey,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          email: null,
          apiKey: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
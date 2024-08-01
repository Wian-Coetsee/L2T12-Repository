// Action creator for successful login
export const login = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});
  
// Action creator for logout
export const logout = () => ({
    type: 'LOGOUT',
});

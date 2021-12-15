import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  //replace remplza la vista actual eliminando el historial de regreso
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Alejandro' ,
        logged: true,
      },
    };

    const previousUrl = localStorage.getItem('lastPath');

    dispatch(action);
    navigate(previousUrl || '/', {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

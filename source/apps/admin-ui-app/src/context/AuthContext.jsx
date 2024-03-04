import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import usePrimatives from '../hooks/usePrimatives';

const AuthContext = createContext(null);

export const AuthProvider = ({ children, dataKey }) => {

  const { isValidString } = usePrimatives();

  const [ authDataKey ] = useState(dataKey);
  const [ authData, setInternalAuthData ] = useState(null);
  const [ isUpdating, setIsUpdating ] = useState(false);

  if (!isValidString(dataKey)) {
    throw new Error('AuthProvider: dataKey is not a valid string');
  }

  const setAuthData = async (data) => {
    if (isUpdating) {
      console.log('AuthProvider: already updating authData');
      return;
    }
    await setIsUpdating(true);
    await setInternalAuthData(data);
    await setIsUpdating(false);
  }

  return (
    <AuthContext.Provider value={{ authData, setAuthData, authDataKey }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  dataKey: PropTypes.string
};

export default AuthContext;

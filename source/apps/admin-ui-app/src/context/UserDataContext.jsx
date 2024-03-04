import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import usePrimatives from '../hooks/usePrimatives';

const UserDataContext = createContext({});

export const UserDataProvider = ({ children, dataKey }) => {
  
  const { isValidString } = usePrimatives();
  const [userData, setUserData] = useState(null);
  const [userDataKey, setUserDataKey] = useState(dataKey);

  if (!isValidString(dataKey)) {
    throw new Error('UserDataProvider: dataKey is not a valid string');
  }

  return (
    <UserDataContext.Provider value={{ userData, setUserData, userDataKey, setUserDataKey }}>
      {children}
    </UserDataContext.Provider>
  );
}

UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  dataKey: PropTypes.string
};

export default UserDataContext;

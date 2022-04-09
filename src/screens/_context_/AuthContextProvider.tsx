import React, {createContext, useState} from 'react';

interface AuthContextValues {
  isRestaurantOwner: boolean;
  setIsRestaurantOwner: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextValues | undefined>(undefined);

const AuthContextProvider: React.FC = ({children}) => {
  const [isRestaurantOwner, setIsRestaurantOwner] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{isRestaurantOwner, setIsRestaurantOwner}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContextProvider, AuthContext};

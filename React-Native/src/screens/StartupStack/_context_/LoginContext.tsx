import React, {createContext, useState} from 'react';
import {LoginInfo} from '../../../Gateways/AuthGateway/AuthGateway.interface';

interface LoginContextValues {
  loginInfo: LoginInfo;
  setLoginInfo: React.Dispatch<React.SetStateAction<LoginInfo>>;
}

export const LoginContext = createContext<LoginContextValues | undefined>(undefined);

const LoginContextProvider: React.FC = ({children}) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({email: '', password: ''});
  return (
    <LoginContext.Provider
      value={{
        loginInfo,
        setLoginInfo,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export {LoginContextProvider};

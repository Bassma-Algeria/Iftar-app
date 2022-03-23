import React, {createContext, useState} from 'react';
import {LoginInfo} from '../../../../../../../Gateways/AuthGateway/AuthGateway.interface';

interface LoginContextValues {
  loginInfo: LoginInfo;
  setLoginInfo: React.Dispatch<React.SetStateAction<LoginInfo>>;

  serverError: string;
  setServerError: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginContext = createContext<LoginContextValues | undefined>(undefined);

const LoginContextProvider: React.FC = ({children}) => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({email: '', password: ''});
  const [serverError, setServerError] = useState<string>('');

  return (
    <LoginContext.Provider
      value={{
        loginInfo,
        setLoginInfo,
        serverError,
        setServerError,
      }}>
      {children}
    </LoginContext.Provider>
  );
};

export {LoginContextProvider};

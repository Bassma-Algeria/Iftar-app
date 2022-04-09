import React, {createContext, useState} from 'react';
import {SignupInfo} from '../../../../../../../Gateways/AuthGateway/AuthGateway.interface';

interface RegisterContextValues {
  registerInfo: SignupInfo;
  setRegisterInfo: React.Dispatch<React.SetStateAction<SignupInfo>>;

  serverError: string;
  setServerError: React.Dispatch<React.SetStateAction<string>>;
}

export const RegisterContext = createContext<RegisterContextValues | undefined>(undefined);

const RegisterContextProvider: React.FC = ({children}) => {
  const [registerInfo, setRegisterInfo] = useState<SignupInfo>({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [serverError, setServerError] = useState<string>('');

  return (
    <RegisterContext.Provider
      value={{
        registerInfo,
        setRegisterInfo,
        serverError,
        setServerError,
      }}>
      {children}
    </RegisterContext.Provider>
  );
};

export {RegisterContextProvider};

import React, {createContext, useState} from 'react';
import {SignupInfo} from '../../../Gateways/AuthGateway/AuthGateway.interface';

interface RegistrationContextValues {
  registrationInfo: SignupInfo;
  setRegistrationInfo: React.Dispatch<React.SetStateAction<SignupInfo>>;
}

export const RegistrationContext = createContext<RegistrationContextValues | undefined>(undefined);

const RegistrationContextProvider: React.FC = ({children}) => {
  const [registrationInfo, setRegistrationInfo] = useState<SignupInfo>({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  return (
    <RegistrationContext.Provider
      value={{
        registrationInfo,
        setRegistrationInfo,
      }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export {RegistrationContextProvider};

import {createContext, useContext, useState} from 'react';
import * as React from 'react';

type ProfileType = {
  name?: string
  email?: string
}

export const SignupFormContext = createContext({});

export const useSignupForm = () => useContext(SignupFormContext);

export const SignupFormProvider = ({children}: JSX.ElementChildrenAttribute) => {
  const [profile, setProfile] = useState<ProfileType>({});
  const [social, setSocial] = useState({});

  return (
      <SignupFormContext.Provider value={{profile, setProfile, social, setSocial}}>
        {children}
      </SignupFormContext.Provider>
  )
}

import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {useSignupForm} from "./SignupFormContext";

type ProfileType = {
  name: string
  email: string
}
type SocialType = {
  twitter: string
  facebook: string
}

const isEmpty = (obj: ProfileType | SocialType) => {
  return Object.keys(obj).length === 0;
}

const StepLinks = (): JSX.Element => {

  const {profile, social}: any = useSignupForm();
  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);

  return (
      <div className="step-links">
        <NavLink to="/" exact>
          {isProfileDone ? '❤' : '🤍'}Profile <span/>
        </NavLink>
        {isProfileDone ? (
            <NavLink to="/social">
              {isSocialDone ? '❤' : '🤍'}Social <span/>
            </NavLink>
        ) : (
            <a>Social <span/></a>
        )}
        {isProfileDone && isSocialDone ? (
            <NavLink to="/review" style={{float: "right"}}>
              Review <span/>
            </NavLink>
        ) : (
            <a style={{float: "right"}}>Review <span/></a>
        )}
      </div>
  );
}
;

export default StepLinks;

import * as React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import ProfileForm from './ProfileForm';
import SocialForm from './SocialForm';
import Review from './Review';
import StepLinks from "./StepLinks";
import {SignupFormProvider} from "./SignupFormContext";
import {AnimatePresence} from "framer-motion";

const SignupForm = (): JSX.Element => {
  const location = useLocation();
  return (
      <SignupFormProvider>
        <div>

          <StepLinks/>

          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={ProfileForm}/>
              <Route path="/social" component={SocialForm}/>
              <Route path="/review" component={Review}/>
            </Switch>
          </AnimatePresence>
        </div>
      </SignupFormProvider>
  );
};

export default SignupForm;

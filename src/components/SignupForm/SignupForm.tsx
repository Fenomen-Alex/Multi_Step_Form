import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProfileForm from './ProfileForm';
import SocialForm from './SocialForm';
import Review from './Review';
import StepLinks from "./StepLinks";

const SignupForm = (): JSX.Element => {
  return (
      <div>

        <StepLinks />

        <Switch>
          <Route path="/" exact component={ProfileForm}/>
          <Route path="/social" component={SocialForm}/>
          <Route path="/review" component={Review}/>
        </Switch>
      </div>
  );
};

export default SignupForm;

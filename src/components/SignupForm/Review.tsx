import * as React from 'react';
import {useSignupForm} from "./SignupFormContext";
import Animator from "./Animator";

const Review = (): JSX.Element => {

  const {profile, social}: any = useSignupForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submit completed!')
  }

  return (
      <Animator>
        <form onSubmit={handleSubmit}>
          <h2>Review all your info</h2>
          <p><strong>Name</strong>: {profile.name}</p>
          <p><strong>Email</strong>: {profile.email}</p>
          <p><strong>Twitter</strong>: {social.twitter}</p>
          <p><strong>Facebook</strong>: {social.facebook}</p>
          <input type="submit" value="Submit All Info"/>
        </form>
      </Animator>
  );
};

export default Review;

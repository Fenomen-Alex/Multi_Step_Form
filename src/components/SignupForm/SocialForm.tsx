import * as React from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useSignupForm} from "./SignupFormContext";
import Animator from "./Animator";

const SocialForm = (): JSX.Element => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const history = useHistory();
  const {social, setSocial}: any = useSignupForm();

  const onSubmit = (data: any) => {
    history.push('/review')
    setSocial(data);
  }

  return (
      <Animator>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2>How can we find you on social?</h2>
          <input
              type="text"
              placeholder="What's your Twitter?"
              defaultValue={social.twitter}
              {...register("twitter", {required: true})}
          />
          <p>{errors.twitter && 'Twitter is required'}</p>
          <input
              type="text"
              placeholder="What's your Facebook?"
              defaultValue={social.facebook}
              {...register("facebook", {required: true})}
          />
          <p>{errors.facebook && 'Facebook is required'}</p>
          <input type="submit" value="Next"/>
        </form>
      </Animator>
  );
};

export default SocialForm;

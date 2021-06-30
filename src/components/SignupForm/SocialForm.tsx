import * as React from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const SocialForm = (): JSX.Element => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/review')
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>
        <input
            type="text"
            name="twitter"
            placeholder="What's your Twitter?"
            {...register( "twitter",{ required: true })}
        />
        <p>{errors.twitter && 'Twitter is required'}</p>
        <input
            type="text"
            name="facebook"
            placeholder="What's your Facebook?"
            {...register( "facebook",{ required: true})}
        />
        <p>{errors.facebook && 'Facebook is required'}</p>
        <input type="submit" value="Next"/>
      </form>
  );
};

export default SocialForm;

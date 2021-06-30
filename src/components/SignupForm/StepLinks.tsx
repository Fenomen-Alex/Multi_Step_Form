import * as React from 'react';
import { NavLink } from 'react-router-dom';

const StepLinks = (): JSX.Element => {
  return (
      <div className="step-links">
        <NavLink to="/" exact>Profile</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/review">Review</NavLink>
      </div>
  );
};

export default StepLinks;
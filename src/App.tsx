import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import SignupForm from "./components/SignupForm/SignupForm";

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
          <SignupForm />
      </div>
    </Router>
  );
}

import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useContext(LoginContext);
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => signInWithEmailAndPassword(data);
  const signInWithEmailAndPassword = (data: Inputs): void => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        if (result.user !== null) {
          const { displayName: name, email } = result.user;
          setUser({ ...user, isSignIn: true, name, email });
        }
    })
    .catch((error) => alert(error.message));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="text-center">
            <span style={{ fontSize: '2.5rem', color: '#1da1f2' }}><FontAwesomeIcon icon={faTwitter} /></span>
            <h4 className="font-weight-bold">Log in to Twitter</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
              <div className="form-row">
                <div className="col-md-12 position-relative mt-4">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Email</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.email ? 'is-invalid' : ''}`} name="email" type="email" ref={register({required: true})} />
                </div>
                <div className="col-md-12 position-relative my-4">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Password</label>
                <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.password ? 'is-invalid' : ''}`} name="password" type="password" ref={register({required: true})} />
                  </div>
              </div>
              <input className="btn btn-primary btn-block py-2 rounded-pill font-weight-bold" type="submit" value="Log in"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
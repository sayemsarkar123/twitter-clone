import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebaseConfig/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  password: string;
  month: number;
  day: number;
  year: number;
};

const SignUp: React.FC = () => {
  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const [textLength, setTextLength] = useState<number>(0);
  const onSubmit = (data: Inputs) => createUserWithEmailAndPassword(data);
  const updateProfile = (name: string): void => {
    var user = firebase.auth().currentUser;
    if (user != null) {
          user.updateProfile({
            displayName: name,
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
  }
  const createUserWithEmailAndPassword = (data: Inputs): void => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        updateProfile(data.name);
        console.log(user);
    })
    .catch((error) => alert(error.messages));
  }
  useEffect(() => {
    setTextLength(watch("name").length)
  }, [watch]);
  return (
    <section className="vh-100 bg-secondary">
      <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-7 py-4 mx-auto">
          <div className="bg-white h-100 px-4 pb-4 pt-2 rounded">
            <div className="d-flex align-items-center">
              <span className="mx-auto" style={{ fontSize: '2rem', color: '#1da1f2' }}><FontAwesomeIcon icon={faTwitter} /></span>
            </div>
            <h4 className="font-weight-bold mb-4">Create your account</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
              <div className="form-row">
                <div className="col-md-12 position-relative mb-4">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Name</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.name ? 'is-invalid' : ''}`} name="name" type="text" ref={register({required: true})} />
                    <p className="text-secondary text-right m-0">{textLength}/50</p>
                </div>
                <div className="col-md-12 position-relative">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Email</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.email ? 'is-invalid' : ''}`} name="email" type="email" ref={register({required: true})} />
                  </div>
                <div className="col-md-12 position-relative mt-4">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Password</label>
                <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.password ? 'is-invalid' : ''}`} name="password" type="password" ref={register({required: true})} />
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6 className="mb-1 font-weight-bold">Date of birth</h6>
                    <span className="text-secondary">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                  </div>
                  <div className="col-md-6 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Month</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.month ? 'is-invalid' : ''}`} name="month" type="number" ref={register({required: true})} />
                </div>
                  <div className="col-md-3 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Day</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.day ? 'is-invalid' : ''}`} name="day" type="number" ref={register({required: true})} />
                </div>
                  <div className="col-md-3 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Year</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className={`form-control border-top-0 border-left-0 border-right-0 rounded-0 ${errors.year ? 'is-invalid' : ''}`} name="year" type="number" ref={register({required: true})} />
                  </div>
                  <div className="col-md-12 text-right mt-2">
                    <input className="btn btn-sm btn-primary text-white rounded-pill px-3 font-weight-bold" type="submit" value="Sign Up"/>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SignUp;
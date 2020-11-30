import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="text-center">
            <span style={{ fontSize: '2.5rem', color: '#1da1f2' }}><FontAwesomeIcon icon={faTwitter} /></span>
            <h4 className="font-weight-bold">Log in to Twitter</h4>
            <form>
              <div className="form-group border-bottom position-relative my-4">
                <label style={{left: '10px', top: 0}} className="position-absolute text-secondary">Phone, email, or username</label>
                <input style={{paddingTop: '2rem', paddingBottom: '1.2rem'}} className="form-control border-0 rounded-0" name="email" type="email"/>
              </div>
              <div className="form-group border-bottom position-relative my-4">
                <label style={{left: '10px', top: 0}} className="position-absolute text-secondary">Password</label>
                <input style={{paddingTop: '2rem', paddingBottom: '1.2rem'}} className="form-control border-0 rounded-0" name="password" type="password"/>
              </div>
              <input className="btn btn-primary btn-block py-2 rounded-pill font-weight-bold" type="button" value="Log in"/>
            </form>
            <div className="mt-3">
              <a className="d-inline-block" href="#">Forgot password?</a>
            <a className="d-inline-block ml-3" href="#">Sign up for Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
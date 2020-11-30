import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faUser, faChartArea } from '@fortawesome/free-solid-svg-icons';

const Main: React.FC = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row vh-100">
        <div className="col-md-6">
          <div style={{background: '#7accfe', zIndex: 1}} className="h-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
            <div>
              <div className="text-white d-flex align-items-center mt-5"><span style={{fontSize: '1.5rem'}}><FontAwesomeIcon icon={faSearch} /></span> <h4 className="ml-3 mb-0">Follow your interests.</h4></div>
            <div className="text-white d-flex align-items-center mt-5"><span style={{fontSize: '1.5rem'}}><FontAwesomeIcon icon={faUser} /></span> <h4 className="ml-3 mb-0">Hear what people are talking about.</h4></div>
            <div className="text-white d-flex align-items-center mt-5"><span style={{fontSize: '1.5rem'}}><FontAwesomeIcon icon={faChartArea} /></span> <h4 className="ml-3 mb-0">Join the conversation.</h4></div>
            </div>
            <span className="position-absolute" style={{zIndex: -1, fontSize: '25rem', top: '0', right: '0', color: '#1da1f2'}}><FontAwesomeIcon icon={faTwitter} /></span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div>
              <span style={{ fontSize: '2.5rem', color: '#1da1f2' }}><FontAwesomeIcon icon={faTwitter} /></span>
              <h3 className="font-weight-bold mt-4 mb-5">See what’s happening in <br /> the world right now</h3>
              <h6 className="font-weight-bold">Join Twitter today.</h6>
              <button className="btn btn-primary btn-block rounded-pill font-weight-bold my-3">Sign Up</button>
              <button className="btn btn-outline-primary btn-block rounded-pill text-primary font-weight-bold">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
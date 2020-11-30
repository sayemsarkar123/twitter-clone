import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const SignUp: React.FC = () => {
  return (
    <section className="vh-100 bg-secondary">
      <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-7 py-4 mx-auto">
          <div className="bg-white h-100 p-4 rounded">
            <div className="d-flex align-items-center">
              <span className="mx-auto" style={{ fontSize: '2rem', color: '#1da1f2' }}><FontAwesomeIcon icon={faTwitter} /></span>
              <button className="btn btn-sm btn-primary text-white rounded-pill px-3 font-weight-bold">Next</button>
            </div>
            <h4 className="font-weight-bold my-4">Create your account</h4>
            <form action="">
              <div className="form-row">
                <div className="col-md-12 position-relative mb-4">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Name</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="name" type="text" />
                  <p className="text-secondary text-right m-0">0/50</p>
                </div>
                <div className="col-md-12 position-relative">
                  <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Email</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="email" type="email" />
                  </div>
                  <div className="col-md-12 mt-5">
                    <h6 className="mb-1 font-weight-bold">Date of birth</h6>
                    <span className="text-secondary">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                  </div>
                  <div className="col-md-6 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Month</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="month" type="number" />
                </div>
                  <div className="col-md-3 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Day</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="day" type="number" />
                </div>
                  <div className="col-md-3 mt-4 position-relative">
                    <label style={{left: '13px', top: 0}} className="position-absolute text-secondary">Year</label>
                    <input style={{ paddingTop: '2rem', paddingBottom: '1.2rem', background: '#F7F9FA' }} className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="year" type="number" />
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
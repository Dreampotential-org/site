import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddMemberAPI } from '../../services/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CreateProjectService.css';

const AddMember = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      value,
    };

    try {
      const response = await AddMemberAPI(data);

      if (response && response.status >= 200 && response.status < 300) {
        console.log('Response:', response.data);
        alert('POST request successful! Response: ' + JSON.stringify(response.data));
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }

    navigate('/Settings/members-list');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 new-form">
          <div className="new-form-container">
            <h3>New Build</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="value">Value:</label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  name="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter a value"
                />
              </div>
              <button type="submit" className="btn btn-success" id="submit-btn">
                Create Build
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMember;

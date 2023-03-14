import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = ({ setNavbarTitle }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarTitle("Your Feedback Matters!");
  }, [setNavbarTitle]);

  return (
    <div className="main-container">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100   mt-[160px]">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Write down your problems</span>
            </label>
            <textarea
              rows={4}
              className="textarea textarea-primary"
              placeholder="start writing here..."
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

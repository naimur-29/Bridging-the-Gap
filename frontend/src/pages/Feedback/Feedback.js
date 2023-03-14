import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = ({ setNavbarTitle }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarTitle("Your Feedback Matters!");
  }, [setNavbarTitle]);

  return (
    <div className="main-container">
      <div className="card flex-shrink-0 w-[90vw] max-w-lg shadow-2xl bg-base-100 mt-[100px] md:mt-[160px] md:w-full">
        <div className="card-body">
          <div className="form-control">
            <select className="select select-primary w-full">
              <option disabled selected>
                Find your problems / suggestions
              </option>
              <option>Facing problems to understand accent</option>
              <option>Prefer to write down more on the board</option>
              <option>Solve the practice problems more often</option>
              <option>
                Couldn't find the course materials in University Library
              </option>
              <option>Faculty may vary their teaching methods </option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Or write down your own</span>
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

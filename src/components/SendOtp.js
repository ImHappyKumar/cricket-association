import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhoAreYou = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleOnChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div
      id="send-otp"
      className="d-flex flex-column align-items-center my-5 w-100"
    >
      <form className="w-100">
        <div className="mb-5">
          <label htmlFor="mobileNumber" className="form-label">
            Enter Mobile Number
          </label>
          <input
            type="phone"
            className="form-control"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleOnChange}
          />
        </div>
        <Link
          className="btn btn-primary w-100 rounded-5 d-flex align-items-center justify-content-center"
          style={{ background: "#FA0000", border: "none", height: "40px" }}
          to={"/verify-otp"}
          state={mobileNumber}
        >
          Send OTP
        </Link>
      </form>
    </div>
  );
};

export default WhoAreYou;

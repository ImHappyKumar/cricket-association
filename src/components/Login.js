import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { title, loginComponent } = props;
  return (
    <div id="login">
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-capitalize">Welcome To Banda</h2>
        <h4 className="mt-sm-5 mt-4">{title}</h4>
        {loginComponent && <loginComponent.component {...loginComponent.props} />}
      </div>
    </div>
  );
};

export default Login;

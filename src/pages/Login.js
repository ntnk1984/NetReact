import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginService } from "../services/loginService";

const Login = () => {
  const [userName, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  // const [errors, setErrors] = useState({
  //   username: undefined,
  //   password: undefined,
  // });
  const handleSubmit =  (e) => {
    loginService.postLogin(JSON.stringify({ UserName: userName, Password: password })) 
  };

  return (
    <div style={{width:"450px"}} className="container h-100   d-flex justify-content-center align-items-center ">
      <div className="main w-75 " style={{marginBottom:150}}>
        <h2 className="border-start border-4 border-primary px-3 ">
          ĐĂNG NHẬP
        </h2>
        <div className="my-3">
          <small id="emailHelpId" className="form-text text-muted " >
            Tài khoản
          </small>
          <label htmlFor className="form-label" />
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="email"
            className="form-control"
          />
          {/* <div className="alert alert-danger p-2 mt-2" role="alert">
            A simple danger
          </div> */}
        </div>
        <div className="mb-3">
          <small id="emailHelpId" className="form-text text-muted">
            Mật khẩu
          </small>
          <label htmlFor className="form-label" />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
          {/* <div className="alert alert-danger p-2 mt-2" role="alert">
            A simple danger
          </div> */}
        </div>
        <div className="d-flex">
          <button onClick={() => {handleSubmit()}} type="button" class="btn btn-primary">
            Đăng nhập
          </button>
          <Link to="/signup" className="mt-1 mx-2">
          Bạn muốn đăng ký ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

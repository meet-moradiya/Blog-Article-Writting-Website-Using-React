import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/Auth";
import { logout } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

function LogoutBtn({ className = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };

  return (
    <Button className={`${className}`} onClick={() => handleLogout()}>
      Logout
    </Button>
  );
}

export default LogoutBtn;

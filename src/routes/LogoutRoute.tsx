import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const LogoutRoute: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle logout
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/auth"); // Redirect to login page after logout
      } catch (error: any) {
        console.error("Error during logout:", error.message);
      }
    };

    // Call the logout function
    handleLogout();
  });

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutRoute;

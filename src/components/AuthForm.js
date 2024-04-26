import React from "react";
import "./styles/authform.scss"; // Import the SCSS file
import { useAuthContext } from "./hooks/useAuthContext";

function AuthForm() {
  const { admin } = useAuthContext();
  const [showForm, setShowForm] = React.useState(false);

  // Handle the click event to show the form
  const handleWindowClick = () => {
    if (!admin) {
      setShowForm(true);
    }
  };

  React.useEffect(() => {
    // Add the window click event listener when the component mounts
    window.addEventListener("click", handleWindowClick);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [admin]);

  return (
    <div className="auth-form-container">
      {/* Show the form if showForm is true */}
      {showForm && (
        <form>
          <input type="email" required placeholder="Enter email" />
          <input type="password" required placeholder="Enter password" />
          <input type="password" required placeholder="Confirm password" />
          <button>Create Account</button>
        </form>
      )}
    </div>
  );
}

export default AuthForm;

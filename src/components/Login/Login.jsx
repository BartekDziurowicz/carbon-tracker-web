import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { $Login, $Form, $Input, $Button, $Logo } from "./Login.styles.jsx";
import logo from "../../assets/carbon-tracker-logo-pure.svg";
import { EmployeeContext } from "../../store/employee-context.jsx";
import { apiCallForAuthentication } from "../../api/Api.jsx";

const Login = () => {
  const { setEmployeeData } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const employeeData = await setUserCredentials()
      .then(() => {
        console.log("kurwa mac", usernameRef.current.value);
        return apiCallForAuthentication(usernameRef.current.value);
      })
      .catch((error) => {
        sessionStorage.removeItem("userCredentials");
        throw error;
      });
    setEmployeeData((_prevData) => ({ ...employeeData }));
    setUserData({ ...employeeData });
    navigate('/metrics');
  };

  async function setUserCredentials() {
    sessionStorage.setItem(
      "userCredentials",
      JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    );
  }

  function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }

  return (
    <$Login onSubmit={handleLogin}>
      <$Logo src={logo} alt="Carbon Tracker" />
      <$Form>
        <$Input
          type="text"
          ref={usernameRef}
          placeholder="Corporate key"
          required
        />
        <$Input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <$Button type="submit">Login</$Button>
      </$Form>
    </$Login>
  );
};

export default Login;

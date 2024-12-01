import { useContext, useRef } from "react";
import { $Login, $Form, $Input, $Button, $Logo } from "./Login.styles.jsx";
import logo from "../../assets/carbon-tracker-logo-pure.svg";
import { EmployeeContext } from "../../store/employee-context.jsx";
import { apiCallForAuthentication } from "../../api/Api.jsx";

const Login = () => {
  const { setEmployeeData } = useContext(EmployeeContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setUserCredentials()
      .then(() => {
        return apiCallForAuthentication(usernameRef.current.value);
      }).then((employeeData) => {
        setEmployeeData((_prevData) => ({ ...employeeData }));
        setUserData({ ...employeeData });
        usernameRef.current.value="";
        passwordRef.current.value="";
      })
      .catch((error) => {
        sessionStorage.removeItem("userCredentials");
        throw error;
      });
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

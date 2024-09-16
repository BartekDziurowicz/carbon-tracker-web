import Banner from "../Banner/Banner.jsx";
import { PiWarningCircle } from "react-icons/pi";
import $RouteError, { $Icon, $Message } from "./RouteError.styles.jsx";

export default function RouteError() {

  return (
    <>
      <Banner /> 
      <$RouteError>
        <$Icon><PiWarningCircle /></$Icon>
        <$Message>An error occured! <div>Could not find this page.</div></$Message>
      </$RouteError>
    </>
  );
}

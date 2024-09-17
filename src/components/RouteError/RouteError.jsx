import { useRouteError } from "react-router-dom";
import Banner from "../Banner/Banner.jsx";
import { PiWarningCircle } from "react-icons/pi";
import $RouteError, { $Icon, $Message } from "./RouteError.styles.jsx";

export default function RouteError({ root }) {
  const error = useRouteError();

  return (
    <>
      {root && <Banner />}
      <$RouteError>
        <$Icon>
          <PiWarningCircle />
        </$Icon>
        <$Message>
          An error occured! <div>{root ? "Could not find this page" : error.message}</div>
        </$Message>
      </$RouteError>
    </>
  );
}
import { useState } from 'react';
import { $Step } from "./Step.styles.jsx";

export default function Step({ stepName, status, children }) {

  const [currentStatus, setCurrentStatus] = useState(status);

  function stepHandler() {
    setCurrentStatus('active');
  }

  return (
    <$Step status={currentStatus}>
      <div style={{fontSize: "24px"}} status={currentStatus} onClick={stepHandler}>{children}</div>
      {stepName}
    </$Step>
  );
}

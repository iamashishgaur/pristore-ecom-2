import React from "react";
import { Alert, Space, message } from "antd";

const Message = ({ children, message }) => {
  return (
    <>
      <Alert type="error" message={message} showIcon>
        {children}
      </Alert>
    </>
  );
};

export default Message;

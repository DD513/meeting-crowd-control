/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Alert } from "antd";
import "./message.less";

function AlertComponent(props) {
  const { title, description } = props;
  return (
    <Alert
      message={title}
      description={description}
      type="info"
      showIcon
      closable
    />
  );
}

export default AlertComponent;

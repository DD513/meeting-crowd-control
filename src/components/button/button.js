/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button } from "antd";
import "./button.less";

function ButtonComponent(props) {
  const { text, size, handleSubmit } = props;
  return (
    <Button type="primary" size={size} onClick={handleSubmit}>
      {text}
    </Button>
  );
}

export default ButtonComponent;

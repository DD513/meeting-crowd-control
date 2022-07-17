/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Input } from "antd";
import "./input.less";

function InputComponent(props) {
  const { text, size, type, placeholder, value } = props;
  return (
    <Input size={size} type={type} placeholder={placeholder} value={value}>
      {text}
    </Input>
  );
}

export default InputComponent;

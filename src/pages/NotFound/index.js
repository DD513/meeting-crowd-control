import React from "react";
import "./index.less";
import images from "../../config/images";
import { Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigate = useNavigate();
  return (
    <div className="NotFoundContainer">
      <Row justify="center">
        <Col xs={24} className="imgBlock">
          <img
            src={images.NotFound}
            className="NotFoundImage"
            alt="NotFoundImage"
          />
        </Col>
        <Col xs={18} sm={6} className="buttonBlock">
          <Button
            ghost
            className="globalButton"
            size="large"
            onClick={() => navigate(-1)}
          >
            回上一頁
          </Button>
        </Col>
        <Col xs={18} sm={6} className="buttonBlock">
          <Button
            ghost
            className="globalButton"
            size="large"
            onClick={() => navigate("/")}
          >
            回首頁
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default NotFoundPage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Steps,
  message,
  Result,
  Button,
  Image,
} from "antd";
import "./index.less";
import images from "../../config/images";
import {
  FaEnvelope,
  FaComments,
  FaSearch,
  FaMoneyCheckAlt,
  FaDog,
  FaStar,
  FaPersonBooth,
  FaTemperatureHigh,
  FaRegClock,
} from "react-icons/fa";
import { SmileOutlined } from "@ant-design/icons";
import AlertComponent from "../../components/message/alert";
import ButtonComponent from "../../components/button/button";
import InputComponent from "../../components/input/input";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import config from "../../config/api-Config";

const { Step } = Steps;
const { Title } = Typography;

function Index() {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch({ type: "GET_PythonData" });
  }, 50);

  const pythonData = useSelector((state) => state.homeReducer);
  // console.log(
  //   "pewerwer",
  //   pythonData,
  //   pythonData.data[0] !== undefined
  //     ? `${config.api}/${pythonData.data[0].imageUrl}`
  //     : "none"
  // );

  const styles = {
    textAlign: "center",
  };

  const steps = [
    {
      title: (
        <div>
          <FaSearch /> <p>搜尋服務</p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <FaComments /> <p>聯絡我們</p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <FaMoneyCheckAlt /> <p>查看影像</p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <FaDog /> <p>執行服務</p>
        </div>
      ),
    },
    {
      title: (
        <div>
          <FaStar /> <p>留下評論</p>
        </div>
      ),
    },
  ];

  const signData = [
    { title: "人數", data: "36", icon: <FaPersonBooth /> },
    { title: "室內溫度", data: "32度", icon: <FaTemperatureHigh /> },
    { title: "時間", data: "2022 年 06 月 18 日 13:42", icon: <FaRegClock /> },
  ];

  const newsList = [
    { date: "2022/02/23", title: "111年會議場地租借說明" },
    { date: "2022/03/16", title: "111年研習單位及研習生申請須知" },
    { date: "2022/04/04", title: "111年防疫宣導" },
    { date: "2022/05/13", title: "111年會議租借紀錄" },
  ];

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("111", windowSize);

  const success = () => {
    message.success("預約成功");
  };

  return (
    <div id="index">
      <Row justify="center" align="center">
        <Col xs={24}>
          <Row className="bannerBlock" justify="center" align="center">
            <Col xs={24} md={13}>
              <div className="imgBlock">
                <Image
                  height={450}
                  src={
                    pythonData.data[0] !== undefined
                      ? `${config.api}/${pythonData.data[0].imageUrl}`
                      : images.homeImageNotFound
                  }
                />
              </div>
            </Col>
            {/* <Col xs={24} md={13}>
              <div className="imgBlock">
                <video width="750" height="500" controls>
                  <source
                    src={
                      pythonData.data[1] !== undefined
                        ? `${config.api}/${pythonData.data[1].videoUrl}`
                        : ""
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            </Col> */}
            <Col xs={24} md={{ offset: 1, span: 10 }}>
              {pythonData.data[0] !== undefined ? (
                <div className="signBlock">
                  <Row>
                    <Col xs={24}>
                      <Title level={2}>{pythonData.data[2].title}：</Title>
                    </Col>
                    <Col xs={24}>
                      <Title level={3}>
                        <span>{pythonData.data[2].data} 人</span>
                      </Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <Title level={2}>{pythonData.data[3].title}：</Title>
                    </Col>
                    <Col xs={24}>
                      <Title>
                        <span level={3}>{pythonData.data[3].data}</span>
                      </Title>
                    </Col>
                  </Row>
                </div>
              ) : (
                <div className="signBlock">
                  <Row>
                    <Col xs={24}>
                      <Title level={2}>人數：</Title>
                    </Col>
                    <Col xs={24}>
                      <Title level={3}>
                        <span>-- 人</span>
                      </Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24}>
                      <Title level={2}>時間：</Title>
                    </Col>
                    <Col xs={24}>
                      <Title level={3}>
                        <span>--</span>
                      </Title>
                    </Col>
                  </Row>
                </div>
              )}
            </Col>
          </Row>
          <Row className="newsBlock" justify="center">
            <Title level={windowSize.width < 576 ? 4 : 2}>最新公告</Title>
            <Col xs={24}>
              {_.map(newsList, (item, index) => (
                <Row>
                  <Col xs={24}>
                    <a href="#">
                      <Title level={4}>
                        <span>{item.date}：</span>
                        <br />
                        <span>【公告】：{item.title}</span>
                      </Title>
                    </a>
                    <hr />
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Col xs={24} md={22} className="titleBlock">
              <div className="alertBlock">
                <AlertComponent
                  title="會議即時人流監測平台"
                  description="因應新冠肺炎疫情嚴峻，人們在室內應保持適當的安全距離，確保室內人數不會超過上限，本系統
              提供即時人數數量、超過上限提醒、室內溫度判斷...等功能，在正常的人數下，保持良好的人數管控。"
                />
              </div>
              <Title level={windowSize.width < 576 ? 4 : 2}>
                即時室內人數數量監測，在任何時間，提供最新資訊給使用者！
                <span>即時體驗</span>
              </Title>
              <div className="buttonBlock">
                <div className="inputBlock">
                  <FaEnvelope />
                  <InputComponent
                    type="text"
                    size="large"
                    placeholder="電子郵件地址"
                  />
                </div>
                <ButtonComponent
                  text="立即預約"
                  size="large"
                  handleSubmit={success}
                />
              </div>
            </Col>
          </Row>
          <Row className="processBlock" justify="center">
            <Col span={24}>
              <Title level={3} style={styles}>
                如何預約我們的服務？
              </Title>
            </Col>
            <Col span={24} className="iconBlock">
              <Steps>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Index;

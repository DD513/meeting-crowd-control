import React from "react";
import { Row } from "antd";
import "./index.less";
import _ from "lodash";
import images from "../../config/images";

const Home = () => {
  const HomeBoxImage = [
    {
      imgSrc: images.homeOne,
      imgTitle: "Introduce",
    },
    {
      imgSrc: images.homeTwo,
      imgTitle: "Relax",
    },
    {
      imgSrc: images.homeThree,
      imgTitle: "Interest",
    },
    {
      imgSrc: images.homeFour,
      imgTitle: "Character",
    },
  ];
  return (
    <Row>
      <div className="container">
        {_.map(HomeBoxImage, (item, index) => (
          <div className="box" key={index}>
            <img key={item.imgSrc} src={item.imgSrc} alt={item.imgTitle} />
            <span key={index}>{item.imgTitle}</span>
          </div>
        ))}
      </div>
    </Row>
  );
};

export default Home;

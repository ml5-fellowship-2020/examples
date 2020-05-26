import "./ExampleCard.css";

import { Card, Col, Row, Tag } from "antd";
import {
  FileImageOutlined,
  FileTextOutlined,
  PlaySquareOutlined,
  SoundOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import React from "react";
import openLink from "../App";

const placeholder = require("../images/placeholder-image.png");

const TAG_COLORS = {
  FaceAPI: "magenta",
  FeatureExtractor: "orange",
  ImageClassifier: "green",
  KNNClassifier: "gold",
  NeuralNetwork: "cyan",
  PitchDetection: "volcano",
  PoseNet: "blue",
  TeachableMachine: "geekblue",
  SoundClassifier: "purple",
  UNet: "red",
  BodyPix: "success",
  Word2Vec: "warning",
  objectDetector: "processing",
};

const ExampleCard = ({ example }) => {
  const { name, description, image, url, category, model } = example;
  const { Meta } = Card;
  const getCategoryIcon = (catogery) => {
    switch (catogery) {
      case "image":
        return <FileImageOutlined style={{ color: "#a15ffb" }} />;
      case "video":
        return <VideoCameraOutlined style={{ color: "#a15ffb" }} />;
      case "text":
        return <FileTextOutlined style={{ color: "#a15ffb" }} />;
      case "sound":
        return <SoundOutlined style={{ color: "#a15ffb" }} />;
      default:
        return;
    }
  };
  return (
    <Col
      xs={{ span: 24, offset: 1 }}
      md={{ span: 12, offset: 2 }}
      lg={{ span: 8, offset: 2 }}
      xl={{ span: 6, offset: 1 }}
      onClick={() => openLink(url)}
    >
      <Card
        hoverable
        style={{ width: 360 }}
        cover={
          <img
            src={image.length > 0 ? require(`../images/${image}`) : placeholder}
            alt={name}
            width={360}
            height={216}
          />
        }
        actions={[
          <Row justify="center" align="middle">
            <div className="Action-text">Live Demo with Code</div>
            <PlaySquareOutlined key="play" className="Play-icon" />
          </Row>,
        ]}
      >
        <Meta
          title={
            <div className="Name">
              {getCategoryIcon(category)} {name}
            </div>
          }
          description={<div className="Description">{description}</div>}
        />
        <Tag color={TAG_COLORS[model]}>{model}</Tag>
      </Card>
    </Col>
  );
};

export default ExampleCard;

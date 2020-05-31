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
import { openLink } from "../util";

const placeholder = require("../images/placeholder-image.png");

const TAGS = {
  FaceAPI: {
    color: "magenta",
    link: "https://learn.ml5js.org/docs/#/reference/face-api",
  },
  FeatureExtractor: {
    color: "orange",
    link: "https://learn.ml5js.org/docs/#/reference/feature-extractor",
  },
  ImageClassifier: {
    color: "green",
    link: "https://learn.ml5js.org/docs/#/reference/image-classifier",
  },
  KNNClassifier: {
    color: "gold",
    link: "https://learn.ml5js.org/docs/#/reference/knn-classifier",
  },
  NeuralNetwork: {
    color: "cyan",
    link: "https://learn.ml5js.org/docs/#/reference/neural-network",
  },
  PitchDetection: {
    color: "volcano",
    link: "https://learn.ml5js.org/docs/#/reference/pitch-detection",
  },
  PoseNet: {
    color: "blue",
    link: "https://learn.ml5js.org/docs/#/reference/posenet",
  },
  TeachableMachine: {
    color: "geekblue",
    link: "https://teachablemachine.withgoogle.com/",
  },
  SoundClassifier: {
    color: "purple",
    link: "https://learn.ml5js.org/docs/#/reference/sound-classifier",
  },
  UNet: {
    color: "red",
    link: "https://learn.ml5js.org/docs/#/reference/unet",
  },
  BodyPix: {
    color: "success",
    link: "https://learn.ml5js.org/docs/#/reference/bodypix",
  },
  Word2Vec: {
    color: "warning",
    link: "https://learn.ml5js.org/docs/#/reference/word2vec",
  },
  objectDetector: {
    color: "processing",
    link:
      "https://github.com/ml5js/ml5-library/tree/development/src/ObjectDetector",
  },
  Handpose: {
    color: "error",
    link: "https://github.com/ml5js/ml5-library/tree/development/src/Handpose",
  },
};

const ExampleCard = ({ example }) => {
  const { name, description, image, url, category, models } = example;
  const modelTags = models.split(",");
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
    >
      <Card
        hoverable
        style={{ width: 360 }}
        cover={
          <div style={{ overflow: "hidden" }}>
            <img
              src={
                image.length > 0 ? require(`../images/${image}`) : placeholder
              }
              alt={name}
              className="Card-image"
              width={360}
              height={216}
            />
          </div>
        }
        actions={[
          <Row justify="center" align="middle">
            <div className="Action-text">Live Demo with Code</div>
            <PlaySquareOutlined key="play" className="Play-icon" />
          </Row>,
        ]}
        onClick={() => {
          openLink(url);
        }}
      >
        <Meta
          title={
            <div className="Name">
              {getCategoryIcon(category)} {name}
            </div>
          }
          description={<div className="Description">{description}</div>}
        />
        {modelTags.map((tag) => {
          const tagInfo = {
            color: TAGS[tag] ? TAGS[tag].color : "default",
            link: TAGS[tag] ? TAGS[tag].link : "https://ml5js.org/",
          };
          return (
            <Tag
              color={tagInfo.color}
              onClick={() => openLink(tagInfo.link)}
              key={tag}
              className="Tag"
            >
              {tag}
            </Tag>
          );
        })}
      </Card>
    </Col>
  );
};

export default ExampleCard;

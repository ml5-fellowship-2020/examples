import "./App.css";

import { Layout, Row } from "antd";

import ExampleCard from "./ExampleCard/ExampleCard";
import React from "react";
import examples from "./data/list.json";
import logo from "./images/ml5_logo.png";
import { openLink } from "./util";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header className="App-header">
        {/* Title */}
        <h1
          className="App-title"
          onClick={() => openLink("https://ml5js.org/")}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
      </Header>
      <Content className="App-content">
        <div className="Project-text">
          <h1>ml5 Playful Examples</h1>
          <p>
            These examples were made to support the ml5js library, website, and
            community.
            <br />
            The aim is to showcase the creative potential of using ml5js and
            attract even more people to use the library.
            <br /> Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://andreasrefsgaard.dk/"
            >
              Andreas Refsgaard
            </a>{" "}
            mentored by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://1023.io/"
            >
              Yining Shi
            </a>
          </p>
        </div>
        {/* Cards Container */}
        <Row className="Examples-Container" gutter={[20, 20]}>
          {examples.map((example, i) => (
            <ExampleCard key={`card-${i}`} example={example} />
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

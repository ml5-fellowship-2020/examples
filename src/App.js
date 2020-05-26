import "./App.css";

import { Layout, Row } from "antd";

import ExampleCard from "./ExampleCard/ExampleCard";
import React from "react";
import examples from "./data/list.json";
import logo from "./images/ml5_logo.png";

export const openLink = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  a.remove();
};

function App() {
  const { Header, Content } = Layout;
  console.log("examples: ", examples);
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
          <h1>ml5 examples</h1>
          <p>
            Project description Project description Project description Project
            description <br /> Project descriptionProject descriptionProject
            descriptionProject description
          </p>
        </div>
        {/* Cards Container */}
        <Row className="Examples-Container" gutter={[16, 16]}>
          {examples.map((example, i) => (
            <ExampleCard key={`card-${i}`} example={example} />
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

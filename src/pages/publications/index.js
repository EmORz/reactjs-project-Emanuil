import React, { Component } from "react";
import styles from "./index.module.css";
import Origam from "../../components/origam";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Origamis from "../../components/origamis";

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: [],
    };
  }

  getOrigamis = async () => {
    const promise = await fetch("http://localhost:9999/api/origami");
    const origamis = await promise.json();
    this.setState({
      origamis,
    });
  };

  renderOrigamis() {
    const { origamis } = this.state;

    return origamis.map((origam, index) => {
      return <Origam key={origam._id} index={index} {...origam} />;
    });
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
      <PageWrapper>
        <Title title="Publication" />

        <Origamis />
      </PageWrapper>
    );
  }
}

export default Publications;

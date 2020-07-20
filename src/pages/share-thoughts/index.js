import React from "react";
import styles from "./index.module.css";
import Title from "../../components/title";
import Button from "../../components/button/submit-button";

import Origamis from '../../components/origamis'

import PageWrapper from "../../components/page-wrapper";

const ShareThoughtsPage = () => {
  return (
    <PageWrapper>
      <Title title="Share your touughts ..." />

      <div className={styles.container}>
        <div>
          <textarea className={styles.textarea}>Publications .............</textarea>
        </div>
        <div>
          <Button title="Post"></Button>
        </div>
        <Origamis />
      </div>
    </PageWrapper>
  );
};

export default ShareThoughtsPage;

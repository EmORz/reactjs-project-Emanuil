import React, { Component } from "react";
import Raper from "../../components/page-wrapper";
import styles from './index.module.css'

class Error extends Component {
  render() {
    return (
      <Raper>
        <div className={styles.container}>Error page!
     
        </div>

        // eslint-disable-next-line jsx-a11y/alt-text
        <img  src="https://thumbs.dreamstime.com/b/page-not-found-design-template-error-flat-line-concept-link-to-non-existent-document-no-results-magnifying-glass-156396935.jpg"/>

     
      </Raper>
    );
  }
}

export default Error;

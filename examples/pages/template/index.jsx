import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Playground from 'component-playground';

import * as X from '../../../src/';
import {Card as CardSample} from '../../codeSamples'
import styles from './styles';

export default class docsPageTemplate extends React.Component {
  render() {
    
    return (
      <div className={styles.exampleWrapper}>

        <div className={styles.docsWrapper}>
          {this.props.children}
        </div>


        <div className={styles.playgroundWrapper}>

          <h2 className={styles.playHeader}>Play with me</h2>

          <Playground
            theme="mbo"
            initiallyExpanded={true}
            codeText={this.props.codeSample}
            scope={{React, ...X}}/>

        </div>
      </div>

    );
  }
}

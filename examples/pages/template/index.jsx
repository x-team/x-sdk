import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Playground from 'component-playground';

import * as X from '../../../src/';
const {XteamerCard} = X;
import xteamer from '../../fixtures/xteamer';
import {Card as CardSample} from '../../codeSamples'
import styles from './styles';
export default class Examples extends React.Component {

  render() {
    return (
      <div className={styles.exampleWrapper}>
        <div className={styles.docsWrapper}>
          <h2>Xteamer card</h2>
          <p>Information about x-teamer and associated x-hero, based on the dataset xteamer object.
             It can be used "as is" in listings or be extended to full card and detailed info.  </p>

          <h2>Props</h2>
          <p> The Xteamer Card is wrapped around the <a href="http://react-toolbox.com/#/components/card">React-toolbox card</a>
            and can be passed exactly the same props. In addition you can pass</p>
        </div>
        <div className={styles.playgroundWrapper}>
          <h2 className={styles.playHeader}>Play with me</h2>

          <Playground
            theme="mbo"
            initiallyExpanded={true}
            codeText={CardSample}
            scope={{React, XteamerCard}}/>
        </div>
      </div>

    );
  }
}

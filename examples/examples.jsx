import React from 'react';
import * as X from '../src/';
import AppBar from 'react-toolbox/lib/app_bar';

import styles from './styles';

const {XteamerCard} = X;
import xteamer from './fixtures/xteamer';

export default class Examples extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <AppBar fixed flat>
          <a href="/">X-SDK</a>
          </AppBar>
          <XteamerCard xteamer={xteamer}/>
      </div>
    );
  }
}

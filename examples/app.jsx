import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Link} from 'react-router'

import styles from './styles';

export default class Examples extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <AppBar  fixed flat>
          <a href="/">X-SDK</a>
          <Navigation className={styles.appbarNav}>
            <Link to="/components/card">Card</Link>
          </Navigation>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

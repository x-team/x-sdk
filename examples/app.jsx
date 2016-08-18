import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Link} from 'react-router'

import styles from './styles';
import './styles/codemirror';
import './styles/mbo';

export default class Examples extends React.Component {

  render() {
    return (
      <div className={styles.xsdkDocs}>
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

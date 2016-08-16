import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import styles from './styles';

export default class Examples extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <AppBar fixed flat>
          <a href="/">X-SDK</a>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

import React from 'react';
import * as X from '../../src/';
import AppBar from 'react-toolbox/lib/app_bar';

const {XteamerCard} = X;
import xteamer from './fixtures/xteamer';

export default class Examples extends React.Component {

  render() {
    return (
      <XteamerCard xteamer={xteamer}/>
    );
  }
}

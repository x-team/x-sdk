import React from 'react';
import * as X from '../src/';
const {XteamerCard} = X;
import xteamer from './fixtures/xteamer';

export default class Examples extends React.Component {

  render() {
    return (
      <XteamerCard xteamer={xteamer}/>
    );
  }
}

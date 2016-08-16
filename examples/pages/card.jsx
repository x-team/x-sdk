import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Playground from 'component-playground';

import * as X from '../../src/';
const {XteamerCard} = X;
import xteamer from './fixtures/xteamer';
import {Card as CardSample} from './samples'

export default class Examples extends React.Component {

  render() {
    return (
      <div>
        <h2>Xteamer card</h2>
        <p>Some basic description</p>
        <p>Some specs </p>
        <h2>Playground</h2>
        <Playground
        theme="monokai"
          initiallyExpanded={true}
          codeText={CardSample}
          scope={{React, XteamerCard}}/>
      </div>

    );
  }
}

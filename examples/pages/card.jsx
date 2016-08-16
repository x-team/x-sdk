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
      <Playground
        theme="monokai"
        collapsableCode={true}
        initiallyExpanded={true}
        codeText={CardSample}
        scope={{React, XteamerCard}}/>
      );
  }
}

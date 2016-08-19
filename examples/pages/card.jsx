import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Playground from 'component-playground';

import DocsPage from './template';
import PropsTable from './components/propsTable';

import CardCodeSample from '../codeSamples/card';


const PROPS_DESCRIPTIONS = {
  xTeamer: {
    type: 'object',
    default: '{}',
    description: 'xteamer object representing xteamer'
  }
}


export default class Examples extends React.Component {

  render() {
    return (
      <DocsPage
        codeSample={CardCodeSample}>

          <h2>Xteamer card</h2>
          <p>Information about x-teamer and associated x-hero, based on the dataset xteamer object. It can be used "as is" in listings or be extended to full card and detailed info.  </p>

          <h2>Props</h2>
          <p> The Xteamer Card is wrapped around the <a href="http://react-toolbox.com/#/components/card">React-toolbox card</a> and can be passed exactly the same props. In addition you can pass</p>

          <PropsTable
            propsDescriptions={PROPS_DESCRIPTIONS}
          />

      </DocsPage>
    );
  }
}

import React from 'react';
import _ from 'lodash';

export default class PropTable extends React.Component {

  renderTableContents () {

    let content;
    return _.map(Object.keys(this.props.propsDescriptions), (propName, index) => {

      content = this.props.propsDescriptions[propName];

      return (
        <tr key={index}>
          <td key="0">{propName}</td>
          <td key="1">{content.type}</td>
          <td key="2">{content.default}</td>
          <td key="3">{content.description}</td>
        </tr>
      );

    });
  }

  render() {
    return (
      <table className="docs">
        <thead>
          <tr>
            <th key="0">Prop name</th>
            <th key="1">Type</th>
            <th key="2">Default</th>
            <th key="3">Description</th>
          </tr>
        </thead>
        <tbody>
          { this.renderTableContents() }
        </tbody>
      </table>
    );
  }
}

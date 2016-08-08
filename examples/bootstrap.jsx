import React from 'react';
import Examples from './examples';
import ReactDOM from 'react-dom';

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);

ReactDOM.render(<Examples />, wrapper);

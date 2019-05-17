import React, { Component } from 'react';
import Maze from '../maze/maze';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <br />
        <Maze />
      </div>
    );
  }
}

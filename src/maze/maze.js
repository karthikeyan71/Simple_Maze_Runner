import React, { Component } from 'react';
import './maze.scss';

export default class Maze extends Component {

  state = {
    list: [
      [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
    ],
    positionX: 0,
    positionY: 0,
    reached: 0,
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.movePlayer.bind(this));
  }

  checkPosibility = (x,y) => {
    const { list } = this.state;
    if(list[x][y] === 1) {
      return false;
    }
    return true;
  }

  movePlayer = ({keyCode}) => {
    const { positionX, positionY, list, reached } = this.state;

    let newPositionX = positionX;
    let newPositionY = positionY;
    let newReached = reached;

    if(keyCode === 38) {
      //Up
      // console.log('Up');
      if( positionX > 0 && this.checkPosibility(positionX - 1, positionY)) {
        newPositionX = positionX-1;
      }

    } else if(keyCode === 37) {
      //Left
      // console.log('Left');
      if( positionY > 0 && this.checkPosibility(positionX, positionY - 1)) {
        newPositionY = positionY-1;
      }
    } else if(keyCode === 39) {
      //right
      // console.log('Right');
      if( positionY < list.length && this.checkPosibility(positionX, positionY + 1)) {
        newPositionY = positionY+1;
      }
    } else if(keyCode === 40) {
      //bottom
      // console.log('Bottom');
      if( positionX < list.length && this.checkPosibility(positionX +1 , positionY)) {
        newPositionX = positionX + 1;
      }
    }

    console.log(newPositionX, newPositionY);

    if(newPositionX === 13 && newPositionY === 19) {
      newReached = 1;
    } else {
      newReached = 0;
    }

    this.setState({
      positionX: newPositionX,
      positionY: newPositionY,
      reached: newReached
    })

  }

  render() {

    const { list, positionX, positionY, reached } = this.state;

    const maze = list.map((innerList, outerIndex) => {
        return innerList.map((item, innerIndex)=>{
          if(positionX === outerIndex && positionY === innerIndex) {
            return (<li className='player'>  </li>)
          }
          return (<li className={`${item == 0? 'unfilled': 'filled'}`}>  </li>)
      });
    });

    return (
      <div className="main-container">
        {maze}
        <br/>
        <br/>
        { reached === 1 && <p> You have won the game </p> }
      </div>
    );
  }
}

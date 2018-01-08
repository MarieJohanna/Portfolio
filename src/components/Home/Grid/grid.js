import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="Grid">
        <div className="grid-container">
          <div className="wide">1</div>
          <div className="hidden">2</div>
          <div className="tall wide">3</div>
          <div className="tall">4</div>
          <div className="tall wide">
            <div className="about">
              <h3>Marie Nilsson</h3>
              <p>I am an outgoing and optimistic person who loves meeting new
            people and to encounter new cultures. I have since an early
            age travelled a lot which has inspired me to later in life
            live in other countries. Until now I have lived in France,
            Colombia and Argentina and I currently live in Stockholm where
            I grew up as well.
              </p>
              <p>I have a business degree and have been working with Treasury
            and Finance for 5 years on the corporate side before I started
            as a business consultant for an IT-consultancy firm about a
            year ago. In my roles I have worked in a lot of different
            systems and platforms which is part of the inspiration for
            wanting to learn to code and what brought me to this course.
              </p>
            </div>
          </div>
          <div className="wide">6</div>
          {/* <div className="hidden">7</div>
          <div className="circle">8</div>
          <div className="tall">9</div>
          <div className="wide">10</div>
          <div className="circle">11</div>
          <div>12</div>
          <div className="circle">13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div> */}
        </div>
      </div>

    )
  }

}

export default Grid

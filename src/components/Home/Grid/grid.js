import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="Grid">
        <div className="grid-container">
          <div className="circle">1</div>
          <div className="tall">2</div>
          <div className="tall wide">3</div>
          <div className="circle">4</div>
          <div className="tall wide">5</div>
          <div>6</div>
          <div className="hidden">7</div>
          <div className="circle">8</div>
          <div className="tall">9</div>
          <div className="wide">10</div>
          <div className="circle">11</div>
          <div>12</div>
          <div className="circle">13</div>
          <div>14</div>
          {/* <div>15</div>
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

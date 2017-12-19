import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="Grid">
        <div className="grid-container">
          <div className="tall">1</div>
          <div>2</div>
          <div className="tall wide">3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div className="wide">8</div>
          <div className="hidden">9</div>
          <div>10</div>
          <div className="wide">11</div>
          <div>12</div>
          <div>13</div>
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

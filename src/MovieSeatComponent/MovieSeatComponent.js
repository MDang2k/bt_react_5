import React, { Component } from "react";
import {dataSeat} from "./dataSeat";

export default class MovieSeatComponent extends Component {
  state = {
    seat: dataSeat
  };

  renderSeat = () => {
    this.state.seat.map((item) => {
      return(
        <div>
          {item.danhSachGhe}
        </div>
      )
    })
  };

  render() {

    return (
      <div>
        <h1>MOVIE SEAT SELECTION</h1>

        <div className="container my-4 p-3">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" />
            <br />
            <label>Number of Seats</label>
            <input type="number" className="form-control" />
          </div>

          <button className="btn btn-secondary m-2">Start Selecting</button>

          <ul className="seat_w3ls">
            <li className="smallBox greenBox">Selected Seat</li>

            <li className="smallBox redBox">Reserved Seat</li>

            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>

          <div className="seatTable">{this.renderSeat()}</div>
        </div>
      </div>
    );
  }
}

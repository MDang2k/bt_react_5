import React, { Component } from "react";
import { dataSeat } from "./dataSeat";

export default class MovieSeatComponent extends Component {
  state = {
    seat: dataSeat,
    user: [],
  };

  handleSelect = () => {
    let newUser = [];

    let name = document.getElementById("Username").value;
    let numSeat = document.getElementById("Numseats").value;

    newUser = [(name = name), (numSeat = numSeat)];
    this.setState({
      user: newUser,
    });
  };

  handleConfirm = () => {
    console.log("confirm");
    console.log(this.state.user);
  };

  handleChooseSeat = (soGhe) => {
    let count = 0;
    let cloneSeat = this.state.seat;
    let index = cloneSeat.findIndex((x) => x.hang == soGhe.charAt(0));
    if (
      !cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat &&
      count < this.state.user[1]) 
      {
      document.getElementById(soGhe).classList.add("gheDuocChon");
      cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat = true;
      count = count + 1
    } else {
      document.getElementById(soGhe).classList.remove("gheDuocChon");
      cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat = false;
      count = count - 1
    }

    console.log(count);

    this.setState({
      seat: cloneSeat,
    });
  };

  renderSeat = () => {
    return this.state.seat.map((item) => {
      return (
        <tr>
          {item.danhSachGhe.map((seat) => {
            return (
              <td>
                <button
                  className="ghe"
                  id={seat.soGhe}
                  onClick={() => this.handleChooseSeat(seat.soGhe)}
                >
                  {seat.soGhe}
                </button>
              </td>
            );
          })}
        </tr>
      );
    });
  };

  render() {
    // console.log(this.state.seat)
    return (
      <div>
        <h1>MOVIE SEAT SELECTION</h1>

        <div className="container my-4 p-3">
          <div className="form-group">
            <label>Name</label>
            <input id="Username" type="text" className="form-control" />
            <br />
            <label>Number of Seats</label>
            <input id="Numseats" type="number" className="form-control" />
          </div>

          <button onClick={this.handleSelect} className="btn btn-secondary m-2">
            Start Selecting
          </button>

          <ul className="seat_w3ls">
            <li className="smallBox greenBox">Selected Seat</li>

            <li className="smallBox redBox">Reserved Seat</li>

            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>

          <div className="seatTable">{this.renderSeat()}</div>

          <div className="screen"></div>

          <button
            onClick={this.handleConfirm}
            className="btn btn-secondary m-2"
          >
            Confirm Selection
          </button>

          <div
            className="displayerBoxes txt-center"
            style={{ overflowX: "auto" }}
          >
            <table className="Displaytable w3ls-table" width="100%">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                <tr>
                  <td>
                    <textarea id="nameDisplay" disabled defaultValue={""} />
                  </td>
                  <td>
                    <textarea id="NumberDisplay" disabled defaultValue={""} />
                  </td>
                  <td>
                    <textarea id="seatsDisplay" disabled defaultValue={""} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

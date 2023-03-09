import React, { Component } from "react";
import { dataSeat } from "./dataSeat";

export default class MovieSeatComponent extends Component {
  state = {
    seat: dataSeat,
    user: [],
    cart: []
  };

  handleSelect = () => {
    let newUser = [];

    let name = document.getElementById("Username").value;
    let numSeat = document.getElementById("Numseats").value;

    newUser = [(name = name), (numSeat = numSeat)];
    this.setState({
      user: newUser,
    });

    document.querySelectorAll('.ghe').forEach(item => item.disabled = false)
  };

  handleChooseSeat = (soGhe) => {
    let cloneSeat = this.state.seat;
    let cloneCart = this.state.cart
    let index = cloneSeat.findIndex((x) => x.hang == soGhe.charAt(0));
    if (!cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat) 
    {
      cloneCart.push(cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1])
      document.getElementById(soGhe).classList.add("gheDangChon");
      cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat = true;
    } else {
      document.getElementById(soGhe).classList.remove("gheDangChon");
      cloneSeat[index].danhSachGhe[soGhe.slice(1) - 1].daDat = false;
      cloneCart.findIndex( (x) => x.soGhe == soGhe.slice(1) - 1)
      cloneCart.splice(cloneCart.findIndex( (x) => x.daDat == false), 1);
      console.log(cloneCart.findIndex( (x) => x.daDat == false));
    }

    this.setState({
      seat: cloneSeat,
      cart: cloneCart
    });
  };

  handleConfirm = () => {
    console.log("confirm");
    console.log(this.state.user);

    document.querySelector('#nameDisplay').innerHTML = this.state.user[0]

    document.querySelector('#NumberDisplay').innerHTML = this.state.user[1]
    
    this.state.cart.forEach((item) => {
      document.querySelector('#seatsDisplay').innerHTML += `${item.soGhe} `
    })

    document.querySelectorAll('.ghe').forEach(item => item.disabled = true)
  };

 

  renderSeat = () => {
    return this.state.seat.map((item) => {
      return (
        <tr>
          {item.danhSachGhe.map((seat) => {
            return (
              <td>
                <button
                  className="ghe m-2"
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

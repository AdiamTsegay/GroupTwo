import React, { Component } from "react";
import AllCountDisplayer from "./AllCountDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
class MyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcount: 0,
      even: 0
    };
    this.allClicksCounter = this.allClicksCounter.bind(this);
    this.evenClicksCounter = this.evenClicksCounter.bind(this);
  }
  async allClicksCounter() {
    this.setState({
      allcount: this.state.allcount + 1,
    });
  }
  async evenClicksCounter() {
    await this.allClicksCounter();
    if (this.state.allcount % 2 == 0)
      this.setState((prevState) => ({
        even: this.state.even + 2,
      }));
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.allClicksCounter();
            this.evenClicksCounter();
          }}
        >
          Click here
        </button>
        <AllCountDisplayer allcount={this.state.allcount} />
        <EvenCounterDisplayer even={this.state.even} />
      </div>
    );
  }
}
export default MyCounter;

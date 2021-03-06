import React from "react";
import "./ExpenseCalculator.css";

class ExpenseCalculator extends React.Component {
  state = {
    price: 0
  }
  handleChange(event) {
    const price = parseInt(event.target.value, 0);
    if (event.target.value === "Venue") {
      this.setState({ price: this.state.price + price });
    } else if (event.target.value === "guest_no") {
      this.setState({ price: this.state.price + price });
    } else if (event.target.value === "catering") {
      this.setState({ price: this.state.price + price });
    } else {
      this.setState({ price: this.state.price - price });
    }
  }
  handleClick(event) {
    const price = parseInt(event.target.value, 0);
    if (event.target.checked) {
      this.setState({ price: this.state.price + price });
    } else {
      this.setState({ price: this.state.price - price })
    }
  }

  render() {
    return (
      <form className="form-horizontal" action="" id="event" onSubmit="return false;">
        <fieldset>
          {/* Form Name */}
          <legend>Event Calculator</legend>

          {/* <!-- Select Basic --> */}

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Venue">
              Event Venue
            </label>
            <div className="col-md-5">
              <select
                id="Venue"
                name="Venue"
                className="form-control"
                onChange={(event) => this.handleChange(event)}
              >
                <option value="0">Select Venue</option>
                <option value="1200">Banquet Hall</option>
                <option value="1500">Event Facility</option>
                <option value="800">Church</option>
                <option value="1600">Hotel/Resort</option>
                <option value="1500">Country Club</option>
                <option value="400">Garden/ Park</option>
                <option value="200">Beach</option>
                <option value="500">Private Residence</option>
                <option value="2500">Farm</option>
                <option value="0">Home</option>
                <option value="300">Lake-Front</option>
                <option value="3500">Historical Building</option>
              </select>
            </div>
          </div>

          {/* <!-- Select Basic --> */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="guest_no">
              Number of Guests
            </label>
            <div className="col-md-5">
              <select
                id="guest_no"
                name="guest_no"
                className="form-control"
                onChange={(event) => this.handleChange(event)}
              >
                <option value="100-200">Please Select</option>
                <option value="1200">50-100</option>
                <option value="2400">100-200</option>
                <option value="3400">200-300</option>
                <option value="4400">300-400</option>
                <option value="5500">400-500</option>
                <option value="6550">500-1000 Call for Quote</option>
              </select>
            </div>
          </div>

          {/* <!-- Select Basic --> */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="catering">
              Catering
            </label>
            <div className="col-md-5">
              <select
                id="catering"
                name="catering"
                className="form-control"
                onChange={(event) => this.handleChange(event)}
              >
                <option value="0">Please Select</option>
                <option value="2000">Sit-Down Dinner</option>
                <option value="1500">Buffet Style</option>
                <option value="3000">Cocktail Style</option>
                <option value="2500">Reception</option>
                <option value="2000">Food Truck</option>
                <option value="1300">Food Stations</option>
              </select>
            </div>
          </div>
          <label className="col-md-4 control-label" id="header" htmlFor="rentals">
            Rentals
          </label>
          <div className="col-md-5">
            <label className="checkbox-inline" htmlFor="rentals-0">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-0"
                value="400"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Event Accessories
            </label>
            <label className="checkbox-inline" htmlFor="rentals-1">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-1"
                value="700"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Lighting
            </label>
            <label className="checkbox-inline" htmlFor="rentals-2">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-2"
                value="1000"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Tent
            </label>
            <label className="checkbox-inline" htmlFor="rentals-3">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-3"
                value="300"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Tables
            </label>
            <label className="checkbox-inline" htmlFor="rentals-4">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-4"
                value="300"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Chair
            </label>
            <label className="checkbox-inline" htmlFor="rentals-5">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-5"
                value="500"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Photo Booth
            </label>
            <label className="checkbox-inline" htmlFor="rentals-6">
              <input
                type="checkbox"
                name="rentals"
                id="rentals-6"
                value="600"
                onClick={(event) => this.handleClick(event)}
              />{" "}
              Transportation
            </label>
          </div>
          {/* <!-- Multiple Checkboxes (inline) --> */}
          <div className="form-group">
            <label className="col-md-4 control-label" id="header" htmlFor="decorations">
              Decorations
            </label>
            <div className="col-md-5">
              <label className="checkbox-inline" htmlFor="decorations-0">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-0"
                  onClick={(event) => this.handleClick(event)}
                  value="150"
                />{" "}
                Bouquets
              </label>
              <label className="checkbox-inline" htmlFor="decorations-1">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-1"
                  onClick={(event) => this.handleClick(event)}
                  value="20"
                />{" "}
                Boutonnieres/ Corsages
              </label>
              <label className="checkbox-inline" htmlFor="decorations-2">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-2"
                  onClick={(event) => this.handleClick(event)}
                  value="2500"
                />{" "}
                Wedding Flowers
              </label>
              <label className="checkbox-inline" htmlFor="decorations-3">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-3"
                  onClick={(event) => this.handleClick(event)}
                  value="2000"
                />{" "}
                Event Flowers &amp; Arrangements
              </label>
              <label className="checkbox-inline" htmlFor="decorations-4">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-4"
                  onClick={(event) => this.handleClick(event)}
                  value="1400"
                />{" "}
                Centerpieces
              </label>
              <label className="checkbox-inline" htmlFor="decorations-5">
                <input
                  type="checkbox"
                  name="decorations"
                  id="decorations-5"
                  onClick={(event) => this.handleClick(event)}
                  value="500"
                />{" "}
                Other Decor
              </label>
            </div>
          </div>
          {/* <!-- Multiple Checkboxes --> */}
          <div className="form-group">
            <label className="col-md-4 control-label" id="header" htmlFor="gift_favors">
              Gift/Favors
            </label>
            <div className="col-md-4">
              <div className="checkbox">
                <label htmlFor="gift_favors-0">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-0"
                    onClick={(event) => this.handleClick(event)}
                    value="200"
                  />{" "}
                  Gifts for Attendees
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-1">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-1"
                    onClick={(event) => this.handleClick(event)}
                    value="100"
                  />{" "}
                  Favors
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-2">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-2"
                    onClick={(event) => this.handleClick(event)}
                    value="20"
                  />{" "}
                  Programs
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-3">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-3"
                    onClick={(event) => this.handleClick(event)}
                    value="15"
                  />{" "}
                  Guest Book
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-4">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-4"
                    onClick={(event) => this.handleClick(event)}
                    value="30"
                  />{" "}
                  Invitations/Reply Cards
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-5">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-5"
                    onClick={(event) => this.handleClick(event)}
                    value="20"
                  />{" "}
                  Menus
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-6">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-6"
                    onClick={(event) => this.handleClick(event)}
                    value="15"
                  />{" "}
                  Place Cards
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="gift_favors-7">
                  <input
                    type="checkbox"
                    name="gift_favors"
                    id="gift_favors-7"
                    onClick={(event) => this.handleClick(event)}
                    value="10"
                  />{" "}
                  Thank You Cards
                </label>
              </div>
            </div>
          </div>
          {/* <!-- Multiple Checkboxes (inline) --> */}
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              id="header"
              htmlFor="entertainment"
            >
              Entertainment
            </label>
            <div className="col-md-4">
              <label className="checkbox-inline" htmlFor="entertainment-0">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-0"
                  onClick={(event) => this.handleClick(event)}
                  value="1000"
                />{" "}
                DJ
              </label>
              <label className="checkbox-inline" htmlFor="entertainment-1">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-1"
                  onClick={(event) => this.handleClick(event)}
                  value="700"
                />{" "}
                MC
              </label>
              <label className="checkbox-inline" htmlFor="entertainment-2">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-2"
                  onClick={(event) => this.handleClick(event)}
                  value="700"
                />{" "}
                Videographer
              </label>
              <label className="checkbox-inline" htmlFor="entertainment-3">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-3"
                  onClick={(event) => this.handleClick(event)}
                  value="300"
                />{" "}
                Photographer
              </label>
              <label className="checkbox-inline" htmlFor="entertainment-4">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-4"
                  onClick={(event) => this.handleClick(event)}
                  value="1150"
                />{" "}
                Live Band
              </label>
              <label className="checkbox-inline" htmlFor="entertainment-5">
                <input
                  type="checkbox"
                  name="entertainment"
                  id="entertainment-5"
                  onClick={(event) => this.handleClick(event)}
                  value="500"
                />{" "}
                Musicians
              </label>
            </div>
            <div id="totalPrice" > <h4> Your Estimated Total is $ </h4>{this.state.price}
            </div>

            {/* <!-- Button --> */}
            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="submit_button" />
              <div className="col-md-4">
                <button
                  id="submit_button"
                  name="submit_button"
                  className="btn btn-warning"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default ExpenseCalculator;

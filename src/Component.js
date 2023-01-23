import React, { Component } from "react";

export class Components extends Component {
  componentDidMount() {
    setInterval(
      () => (
        this.setState({
          curTimeAUS: new Date().toLocaleTimeString("en-US", {
            timeZone: "Australia/Sydney",
          }),
        }),
        this.setState({ curTimeIND: new Date().toLocaleTimeString() }),
        this.setState({
          curTimeGMY: new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Berlin",
          }),
        }),
        this.setState({
          curTimeUK: new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/London",
          }),
        }),
        this.setState({
          curTimeSA: new Date().toLocaleTimeString("en-US", {
            timeZone: "Africa/Johannesburg",
          }),
        }),
        this.setState({
          curTimeINDO: new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Jakarta",
          }),
        }),
        this.setState({
          curTimeJPN: new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Tokyo",
          }),
        }),
        this.setState({
          curTimeCAN: new Date().toLocaleTimeString("en-US", {
            timeZone: "Canada/Central",
          }),
        }),
        this.setState({
          curTimeCHI: new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Shanghai",
          }),
        }),
        this.setState({
          curTimeUSA: new Date().toLocaleTimeString("en-US", {
            timeZone: "America/New_York",
          }),
        }),
        this.setState({
          curTimeFRN: new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Paris",
          }),
        }),
        this.setState({
          curTimeRUS: new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Moscow",
          }),
        })
      ),
      1000
    );
  }

  state = {
    curTimeAus: new Date().toLocaleTimeString("en-US", {
      timeZone: "Australia/Sydney",
    }),
  };
  state = { curTimeIND: new Date().toLocaleTimeString() };
  state = {
    curTimeGMY: new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Berlin",
    }),
  };
  state = {
    curTimeUK: new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/London",
    }),
  };
  state = {
    curTimeSA: new Date().toLocaleTimeString("en-US", {
      timeZone: "Africa/Johannesburg",
    }),
  };
  state = {
    curTimeINDO: new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Jakarta",
    }),
  };
  state = {
    curTimeJPN: new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Tokyo",
    }),
  };
  state = {
    curTimeCAN: new Date().toLocaleTimeString("en-US", {
      timeZone: "Canada/Central",
    }),
  };
  state = {
    curTimeCHI: new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Shanghai",
    }),
  };
  state = {
    curTimeRUS: new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Moscow",
    }),
  };
  state = {
    curTimeFRN: new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Paris",
    }),
  };
  state = {
    curTimeUSA: new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    }),
  };

  render() {
    return (
      <div style={{ background: "black" }} className="container">
        <>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5
              style={{ margin: "auto", fontSize: "2.2rem" }}
              className="my-0 mr-md-auto font-weight-normal"
            >
              Govinds Clock
            </h5>
          </div>

          <div
            style={{ color: "white" }}
            className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
          >
            <h1 className="display-4">World clock</h1>
            <p style={{ fontSize: "1.4rem" }} className="lead">
              World is ticking in different time so are you?
            </p>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Australia</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeAUS}</h3>
                    <small className="text-muted"></small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Germany</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeGMY}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">India</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeIND}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">U.S.A</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeUSA}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">United Kingdom</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeUK}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Indonesia</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeINDO}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">France</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeFRN}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Japan</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeJPN}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Russia</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeRUS}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">South Africa</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeSA}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Canada</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeCAN}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">China</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    <h3>{this.state.curTimeCHI}</h3>
                    <small className="text-muted">/ mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
              <div className="row">
                <div className="col-12 col-md">
                  <img
                    className="mb-2"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                  <small className="d-block mb-3 text-muted">
                    &copy; 2017-2018
                  </small>
                </div>
                <div className="col-6 col-md">
                  <h5>Features</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Cool stuff
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Random feature
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Team feature
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Stuff for developers
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Another one
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Last time
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>Resources</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Resource
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Resource name
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Another resource
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Final resource
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5>About</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="#">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Locations
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </>
      </div>
    );
  }
}

export default Components;

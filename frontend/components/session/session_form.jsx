import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      display_name: "",
      password: "",
      age: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({
      email: "demo_user@demo.com",
      display_name: "demo_user",
      password: "demodemo",
      age: 21
    }).then(
      () => this.props.history.replace(`/stream`)
    );
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    if (this.props.formType === "login") {
      this.props.login(user).then(
        () => this.props.history.replace(`/stream`)
      );
    } else {
      this.props.signup(user).then(
        () => this.props.history.replace(`/stream`)
      );
    }

  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, number) => (
          <li key={`error-${number}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  render() {
    const header = this.props.formType === 'Continue' ?
      "Create your NoizeNimbus account" : "";

    return (
      <div className="session-form-container">
        <form className="demo">
          <button onClick={this.handleDemoLogin}>Demo Login</button>
        </form>
        <div className="session-divider"></div>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h1 className="session-form-header">{ header }</h1>
          <div className="session-form">
            <input type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
              className="session-input"
              placeholder="Email"
              />
            { this.props.formType === 'Continue' &&
              <input type="text"
                value={this.state.display_name}
                onChange={this.handleChange('display_name')}
                className="session-input"
                placeholder="Display name"
                />
            }
            <input type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              className="session-input"
              placeholder="Password"
              />
            { this.props.formType === 'Continue' &&
              <input type="number"
                value={this.state.age}
                onChange={this.handleChange('age')}
                className="session-input"
                placeholder="Age"
                />
            }
            <button className="session-submit">
              {this.props.formType}
            </button>

            <div className="session-errors">
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

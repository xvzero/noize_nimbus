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
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => this.props.history.replace(`/stream`)
    );
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
      "Create your NoizeNimbus account" : "Login";

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          { header }
          <div className="session-form">
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                className="session-input"
                />
            </label>
            { this.props.formType === 'Continue' &&
              <label>Display Name:
                <input type="text"
                  value={this.state.display_name}
                  onChange={this.handleChange('display_name')}
                  className="session-input"
                  />
              </label>
            }
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                className="session-input"
                />
            </label>
            { this.props.formType === 'Continue' &&
              <label>Age:
                <input type="number"
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  className="session-input"
                  />
              </label>
            }
            <input type="submit"
              value={this.props.formType}
              className="session-submit"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class SessionOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: ""};
  }

  toggleModal(field) {
    this.setState({activeModal: field });
  }

  render() {
    return (
      <div>
        <div className="session-buttons">
          <button className="signin-button"
            onClick={() => this.toggleModal('signin')}>
            { 'Sign in' }
          </button>
          <button className="signup-button"
            onClick={() => this.toggleModal('signup')}>
            Create account
          </button>
        </div>

        <Modal isOpen={this.state.activeModal === 'signin'}
          onRequestClose={() => this.toggleModal('')}
          ariaHideApp={false}
          className="session-form-modal"
           overlayClassName="session-form-overlay"
        >
          <LoginFormContainer />
        </Modal>

        <Modal isOpen={this.state.activeModal === 'signup'}
          onRequestClose={() => this.toggleModal('')}
          ariaHideApp={false}
          className="session-form-modal"
           overlayClassName="session-form-overlay"
        >
          <SignupFormContainer />
        </Modal>

      </div>
    );
  }
}

export default SessionOptions;

import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBarContainer from './searchbar/searchbar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
     this.props.logout().then(
       () => this.props.history.push('/logout')
     );
  }

  render() {
    return (
      <header className="banner">
        <div className="navbar">
          <header className="header-left">
            <Link to="/" className="header-logo-link">
              <img src="./assets/logo/logo.png" className="header-logo"/>
            </Link>
            <ul className="header-left-list">
              <li className="header-left-list-item"><Link to={this.props.currentUser ? "/stream" : "/"}>Home</Link></li>
              <li className="header-left-list-item"><Link to="/collection">Collection</Link></li>
            </ul>
          </header>
          <nav className="header-middle">
          </nav>
          <nav className="header-right">
            <Link to="/upload" className="upload">Upload</Link>
            { this.props.currentUser &&
              <div className="profile-nav">
                <Link to={this.props.currentUser.profile_url}>{this.props.currentUser.display_name}</Link>
              </div>
            }
            { this.props.currentUser &&
              <Link to="/logout"
                onClick={this.handleLogout}
                className="logout">Signout</Link>
            }
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;

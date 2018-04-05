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
      <header>
        <nav className="header-left">
          <Link to="/stream" className="header-logo"></Link>
          <ul>
            <li><Link to={this.props.currentUser ? "/stream" : "/"}
              className="header-navMenuItem">Home</Link></li>
            <li><Link to="/collection"
              className="header-navMenuItem">Collection</Link></li>
          </ul>
        </nav>
        <nav className="header-middle">
        </nav>
        <nav className="header-right">
          <Link to="/upload" className="upload">Upload</Link>
          { this.props.currentUser &&
          <div className="profile-nav">
            <Link to="/:profileUrl">{this.props.currentUser.display_name}</Link>
          </div>
          }
          { this.props.currentUser &&
            <Link to="/logout"
              onClick={this.handleLogout}
              className="logout">Signout</Link>
          }
        </nav>
      </header>
    );
  }
}

export default NavBar;

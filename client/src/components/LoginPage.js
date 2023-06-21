import React from "react";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Make an API call to login the user
  // };

  handleSubmit = (e) => {
    e.preventDefault();

        // Make an API call to login the user

    const { username, password } = this.state;
    // Call the onLogin function passed from the parent component
    this.props.onLogin(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    );
  }
}

export default LoginPage;
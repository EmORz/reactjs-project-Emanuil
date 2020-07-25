import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      posts: null,
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userid);
  }

  getUser = async (userid) => {
      debugger
    const promisse = await fetch(`http://localhost:9999/api/user?id=${userid}`);
debugger
    const user = await promisse.json();
debugger
    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length,
    });
  };
  render() {
    const { username, posts } = this.state;
    return (
      <PageWrapper>
        <div>
          <p>User: {username}</p>
          <p>Posts: {posts}</p>
        </div>
 
      </PageWrapper>
    );
  }
}

export default Profile;

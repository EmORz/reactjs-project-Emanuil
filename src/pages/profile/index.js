import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import UserContext from '../../Context'
import Button from '../../components/button/submit-button'
import style from './index.module.css'


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      posts: null,
    };
  }

  static contextType = UserContext

  logOut = ()=>{
 
    this.context.logOut()
    this.props.history.push('/')
  }
  componentDidMount() {
    this.getUser(this.props.match.params.userid);
  }

  getUser = async (userid) => {
      
    const promisse = await fetch(`http://localhost:9999/api/user?id=${userid}`);

   const user = await promisse.json();

    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length,
    });
  };
  render() {
    const { username, posts } = this.state;
    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.logOut}>
          <p>User: {username}</p>
          <p>Posts: {posts}</p>

          <Button  title="Logout" />
          {/* <button onClick={this.logOut}>LogOut</button> */}
        </form>
 
      </PageWrapper>
    );
  }
}

export default Profile;


import React from "react";
import { Link } from "react-router-dom";
import SpotifyPlayer from './Music'

class ProfilePic extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.src} width="35%" ></img>
            </div>
        );
    }
}

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my profile</h1>
        <Link to="/">Go back to home</Link>
        <SpotifyPlayer src="https://open.spotify.com/album/0KQyC28P9808r0oKKNgHvp?si=LrliPaaHSBW8rLBrLQMTuQ" />
        <ProfilePic src="https://i.pinimg.com/originals/c3/3d/8a/c33d8ad841ed5d2614138495158a6f4c.jpg" /> 
      </div>
    );
  }
}
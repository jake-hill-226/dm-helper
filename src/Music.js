
import React from "react";
import { Link } from "react-router-dom";

export default class SpotifyPlayer extends React.Component {
    render() {
        return(
            <div>
                <iframe src={this.props.src} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        );
    }
}
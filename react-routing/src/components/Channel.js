import React from "react";

import {Link} from "react-router-dom";

export default class ChannelView extends React.Component {
    render() {
        return (
            <h1>{this.props.match.params.chanName}</h1>
        );
    }
}
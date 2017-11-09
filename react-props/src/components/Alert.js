import React from "react";

// extending React.Component
// class Alert
// make that class available to other using Export

export default class Alert extends React.Component {
    render() {
        let className = "alert alert-" + 
            (this.props.type || "success");
        return  (
            <div className={className}>
                {(this.props.message || "No message")}
            </div>
        );
    }
}
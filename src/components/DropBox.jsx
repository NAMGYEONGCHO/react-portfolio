import React, { Component } from 'react'

class DropBox extends Component {
    state = {
        opened: false
    }

    toggleDropBox() {
        console.log(!this.state.opened)
        this.setState({
            opened: !this.state.opened
        });
    }

    close() {
        this.setState({
            opened: false
        });
    }

    render() {
        // Gets props
        const {
            name,
            additionalClasses,
            options
        } = this.props;

        return (
            <div className={`dropdown ${additionalClasses}`}>
                {/* Main button */}
                <button onClick={this.toggleDropBox.bind(this)} className="dropbtn">
                    {name}
                </button>

                <div className={`dropdown-list ${this.state.opened && 'show'}`}>
                    {/* Close button */}
                    <div className="close-button" onClick={this.close.bind(this)}>x</div>

                    {/* List items */}
                    {options.map((option, index) =>
                        <a href={option.link} key={index}>
                            {option.name}
                        </a>
                    )}
                </div>
            </div>)
    }
}

export default DropBox;
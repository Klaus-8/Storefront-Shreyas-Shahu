import React, { Component, createRef } from "react";

export class OutsideClick extends Component {
  constructor(props) {
    super(props);

    this.dropdownRef = createRef();
    this.ClickOutsideHandler = this.ClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.ClickOutsideHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.ClickOutsideHandler);
  }

  ClickOutsideHandler(event) {
    if (
      this.props.isOpen &&
      this.dropdownRef &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.props.closeHandler();
    }
  }

  render() {
    return <div ref={this.dropdownRef}>{this.props.children}</div>;
  }
}

export default OutsideClick;

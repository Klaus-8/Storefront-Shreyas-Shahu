import React, { Component } from "react";

import * as sc from "./Loading.styles";
import images from "../../Assets/images";

export class Loading extends Component {
  render() {
    return (
      <sc.LoadingContainer>
        <sc.LoadingSpinner src={images.SpinnerWheel} alt="Loading" />
      </sc.LoadingContainer>
    );
  }
}

export default Loading;

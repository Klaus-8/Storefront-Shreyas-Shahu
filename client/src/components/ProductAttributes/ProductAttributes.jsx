import React, { Component } from "react";
import { connect } from "react-redux";

import allActions from "../../State/Actions";
import * as sc from "./ProductAttributes.styles";

export class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.initialAttributes };

    const { selectedAttributesHandler, type } = this.props;
    if (type === "singleProduct") selectedAttributesHandler(this.state);
  }

  attributeClickHandler = async (name, value) => {
    await this.setState({ [name]: value });

    const { selectedAttributesHandler } = this.props;
    selectedAttributesHandler(this.state);
  };

  render() {
    const { attributes, selectedAttributes, type } = this.props;

    return (
      <sc.AttributesContainer type={type}>
        {attributes.map((attribute, index) => (
          <sc.Attributes key={index} type={type}>
            <sc.AttributeName
              className={type === "singleProduct" && "miniCartAttributeNames"}
              type={type}
            >{`${attribute.name} :`}</sc.AttributeName>
            {attribute.type === "swatch" ? (
              <sc.AttributeOuterContainer type={type}>
                {attribute.items.map((item, index) => (
                  <sc.AttributeSwatchContainer
                    type={type}
                    key={index}
                    colorHex={item.value}
                    onClick={() =>
                      type === "singleProduct"
                        ? this.attributeClickHandler(attribute.name, item.value)
                        : null
                    }
                    active={
                      type === "singleProduct"
                        ? this.state[attribute.name] === item.value
                          ? false
                          : true
                        : selectedAttributes[attribute.name] === item.value
                        ? false
                        : true
                    }
                  />
                ))}
              </sc.AttributeOuterContainer>
            ) : (
              <sc.AttributeOuterContainer type={type}>
                {attribute.items.map((item, index) => (
                  <sc.AttributeInnerContainer
                    key={index}
                    type={type}
                    onClick={() =>
                      type === "singleProduct"
                        ? this.attributeClickHandler(attribute.name, item.value)
                        : null
                    }
                    active={
                      type === "singleProduct"
                        ? this.state[attribute.name] === item.value
                          ? true
                          : false
                        : selectedAttributes[attribute.name] === item.value
                        ? true
                        : false
                    }
                  >
                    <sc.AttributeValue type={type}>
                      {item.value}
                    </sc.AttributeValue>
                  </sc.AttributeInnerContainer>
                ))}
              </sc.AttributeOuterContainer>
            )}
          </sc.Attributes>
        ))}
      </sc.AttributesContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedAttributesHandler: (selectedAttributes) =>
      dispatch(
        allActions.productActions.selectedAttributesHandler(selectedAttributes)
      ),
  };
};

export default connect(null, mapDispatchToProps)(ProductAttributes);

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CustomSkeleton extends Component {
  render() {
    const style = `div[skeleton] { background-color: ${this.props.backgroundColor} }`;
    // TODO: For every property and find a better solution
    return (
      <div>
        <style type="text/css">
          {style}
        </style>
        {this.props.component}
      </div>
    );
  }
}

CustomSkeleton.propTypes = {
  display: PropTypes.bool,
  component: PropTypes.any,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  widthRandomness: PropTypes.number,
  heightRandomness: PropTypes.number,
  animate: PropTypes.bool,
  className: PropTypes.string
};

export default CustomSkeleton;

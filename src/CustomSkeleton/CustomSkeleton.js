import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CustomSkeleton extends Component {
  render() {
    let style = `div[skeleton] {
      background-color: ${this.props.backgroundColor},
      backgroundImage: linear-gradient(90deg, ${this.props.backgroundColor}, #f5f5f5, ${this.props.backgroundColor}),
    }`;
    // TODO: For every property and find a better solution
    if(this.props.style) {
      // TODO: For style
    }
    if(!this.props.display) {
      // TODO: For display
    }

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
  gradientColor: PropTypes.string,
  style: PropTypes.object,
  widthRandomness: PropTypes.number,
  heightRandomness: PropTypes.number,
  animate: PropTypes.bool,
};

CustomSkeleton.defaultProps = {
  display: true,
  speed: 1.2,
  component: true,
  animate: true,
}

export default CustomSkeleton;

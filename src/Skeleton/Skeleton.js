import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../utils/style.css';

class Skeleton extends Component {
  render() {
    // TODO: To apply all the custom styles to the component
    const style = {
      display: this.props.display,
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor,
      backgroundImage: `linear-gradient(90deg, ${this.props.backgroundColor}, #f5f5f5, ${this.props.backgroundColor})`,
    };
    if(this.props.animate) {
      style.animation = `slide ${this.props.speed}s ease-in-out infinite`;
    }
    const className=`react-skeleton ${this.props.className}`;
    return (
      <div style={style} className={className}>
        {this.props.children}
      </div>
    );
  }
}

Skeleton.propTypes = {
  display: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  speed: PropTypes.number,
  backgroundColor: PropTypes.string,
  gradientColor: PropTypes.string,
  style: PropTypes.object,
  widthRandomness: PropTypes.number,
  heightRandomness: PropTypes.number,
  animate: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
};

Skeleton.defaultProps = {
  display: false,
  speed: 1.2,
  animation: true,

}

export default Skeleton;

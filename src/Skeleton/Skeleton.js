import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import '../utils/style.css';
// TODO: React Skeleton to have props with es6 Syntax
class Skeleton extends Component {
  render() {

    const { width, height, backgroundColor, gradientShade } = this.props;

    // TODO: To apply all the custom styles to the component. 2 left - widthRandomness and heightRandomness
    const style = {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      backgroundImage: `linear-gradient(90deg, ${backgroundColor}, ${gradientShade}, ${backgroundColor})`,
    };
    if(this.props.animate) {
      // style.animation = `slide ${this.props.speed}s ease-in-out infinite`;
    }
    if(!this.props.display) {
      style.display = `none`;
    }
    // const className=`react-skeleton ${this.props.className}`;
    return (
      <div style={style} className={cn('react-skeleton', this.props.className)}>
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
  children: PropTypes.any,
  gradientShade: PropTypes.string,
};

// TODO: default propTypes for others attributes.
Skeleton.defaultProps = {
  display: true,
  speed: 1.2,
  animation: true,
  backgroundColor: '#eee',
  gradientColor: '#f5f5f5'
}

export default Skeleton;

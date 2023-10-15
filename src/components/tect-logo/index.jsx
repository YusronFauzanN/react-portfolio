import React from "react";
import PropTypes from "prop-types";

class TechLogo extends React.Component {
  render() {
    const { image, alt } = this.props;
    return (
      <a
        href=""
        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
      >
        <img src={image} alt={alt} srcSet="" />
      </a>
    );
  }
}

TechLogo.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TechLogo;

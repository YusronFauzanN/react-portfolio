import React from "react";
import laptop from "../../assets/laptop.jpg";
import PropTypes from "prop-types";

class ExperieceCard extends React.Component {
  render() {
    return (
      <div className="mb-12 p-4 md:w-1/2 ">
        <div className="group rounded-md shadow-md overflow-hidden relative">
          <img
            src={laptop}
            alt=""
            className="w-full group-hover:brightness-50 transition duration-500 ease-in-out"
          />
          <p
            className="group-hover:text-white group-hover:block transition duration-500 ease-in-out font-medium text-base lg:text-xl text-dark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white hidden"
            id="okpos"
          >
            <span>{this.props.textTitle}</span>
            <br />
            <span className="text-sm lg:text-base text-slate-200">
              {this.props.textValue}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

ExperieceCard.propTypes = {
  textValue: PropTypes.string.isRequired,
  textTitle: PropTypes.string.isRequired,
};

export default ExperieceCard;

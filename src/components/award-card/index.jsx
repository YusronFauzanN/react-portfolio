import React from "react";
import PropTypes from "prop-types";

class AwardCard extends React.Component {
  render() {
    const { awardName } = this.props;

    return (
      <div className="max-w-xs mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="py-4 bg-primary text-dark text-center font-bold">
          Award
        </div>
        <div className="px-6 py-4">
          <p className="text-xl text-dark font-semibold mb-2">{awardName}</p>
        </div>
      </div>
    );
  }
}

AwardCard.propTypes = {
  awardName: PropTypes.string.isRequired,
};

export default AwardCard;

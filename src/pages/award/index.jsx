import React from "react";
import AwardCard from "../../components/award-card";
import Navbar from "../../components/navbar";

const awardsData = [
  "Best Web Developer Award, 2022",
  "Outstanding Coding Skills Award, 2021",
  "Top Contributor to Open Source Projects, 2020",
];

class AwardsPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-32">
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-bold text-lg text-center text-sky-600 mb-2">
                  MORE ABOUT ME
                </h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  Awards
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awardsData.map((award, index) => (
                <AwardCard key={index} awardName={award} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AwardsPage;

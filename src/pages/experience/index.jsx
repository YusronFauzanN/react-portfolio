import React from "react";
import Navbar from "../../components/navbar";
import ExperieceCard from "../../components/experience-card";

class Experience extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="project" className="pt-36 pb-24">
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-bold text-lg text-center text-sky-600 mb-2">
                  PROJECT
                </h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  Project Terbaru
                </h2>
                <p className="font-medium text-base text-secondary md:text-lg">
                  Berikut merupakan project yang pernah saya buat maupun pernah
                  saya kerjakan.
                </p>
              </div>
            </div>
            <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
              <ExperieceCard
                textTitle={"API MyGram"}
                textValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vitae!"
                }
              />
              <ExperieceCard
                textTitle={"Laravel API CRUD"}
                textValue={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, porro."
                }
              />
              <ExperieceCard
                textTitle={"Laracamp"}
                textValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, mollitia?"
                }
              />
              <ExperieceCard
                textTitle={"RESTful API With Node JS"}
                textValue={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, qui!"
                }
              />
              <ExperieceCard
                textTitle={"RESTful API Nest JS"}
                textValue={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, excepturi?"
                }
              />
              <ExperieceCard
                textTitle={"Uninus Superapp"}
                textValue={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, libero."
                }
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Experience;

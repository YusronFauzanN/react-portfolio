import React from "react";
import TechLogo from "../../components/tect-logo";
import htmlLogo from "../../assets/logo-html.png";
import cssLogo from "../../assets/logo-css.png";
import javascriptLogo from "../../assets/logo-javascript.png";
import phpLogo from "../../assets/logo-php.png";
import mysqlLogo from "../../assets/logo-mysql.png";
import laravelLogo from "../../assets/logo-laravel.png";
import bootstrapLogo from "../../assets/logo-bootstrap.png";
import tailwindLogo from "../../assets/logo-tailwind.png";
import Navbar from "../../components/navbar";

class Skill extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="tech-stack" className="pt-36 pb-32">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-center text-sky-600 mb-2">
                TECH STACK
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Bahasa Pemograman dan Framework
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                Berikut merupakan bahasa pemograman dan framework yang familiar
                atau sering digunakan
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <TechLogo image={htmlLogo} alt="HTML" />
              <TechLogo image={cssLogo} alt="CSS" />
              <TechLogo image={javascriptLogo} alt="JavaScript" />
              <TechLogo image={phpLogo} alt="PHP" />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <TechLogo image={mysqlLogo} alt="MySQL" />
              <TechLogo image={laravelLogo} alt="Laravel" />
              <TechLogo image={bootstrapLogo} alt="Bootstrap" />
              <TechLogo image={tailwindLogo} alt="Tailwind CSS" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Skill;

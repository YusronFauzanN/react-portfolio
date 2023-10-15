import Navbar from "../../components/navbar";
import React from "react";
import yusronImage from "../../assets/yusron-resize.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="hero" className="pt-36">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full text-left px-4 mt-8 lg:w-1/2">
                <h1 className="text-base font-semibold text-sky-600 md:text-xl mb-3">
                  Halo Semuanya, Perkenalkan Saya
                </h1>
                <span className="font-bold font-mono text-dark text-4xl mt-1">
                  Yusron Fauzan Nasrullah
                </span>
                <h2 className="font-semibold text-sky-600 text-lg b-5 lg:text-2xl mb-3">
                  Mahasiswa |
                  <span className="text-dark"> Backend Developer</span>
                </h2>
                <p className="font-medium text-secondary mb-10 leading-relaxed">
                  Saya adalah seorang Mahasiswa dan Backend Developer. Saya
                  memiliki fokus pada pengembangan backend untuk menjadikan
                  aplikasi web lebih kuat dan lancar. Dengan keahlian saya dalam
                  merancang, mengembangkan, dan memelihara sistem serta
                  infrastruktur yang dibutuhkan, saya siap menghadirkan solusi
                  teknis untuk tantangan dalam dunia web.
                </p>
                <a
                  href="#contact"
                  className="text-base font-medium text-white bg-sky-600 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                >
                  Hubungi Saya
                </a>
              </div>
              <div className="w-full self-end px-4 lg:w-1/2">
                <div className="mt-10 relative lg:mt-5 lg:right-0">
                  <img
                    src={yusronImage}
                    alt="Yusron"
                    className="relative max-w-full mx-auto pb-5 z-10"
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                    <svg
                      width="400"
                      height="400"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#0284C7"
                        d="M46.1,-70.5C59.1,-72.2,68.7,-58.7,74.8,-44.4C80.9,-30.1,83.5,-15.1,79.2,-2.5C74.9,10.1,63.6,20.1,51.6,24.2C39.5,28.2,26.7,26.2,18,27.3C9.3,28.5,4.6,32.8,-5.4,42.3C-15.5,51.7,-31.1,66.2,-42.7,66.7C-54.3,67.2,-61.9,53.7,-70.4,40.2C-78.8,26.8,-88.1,13.4,-89.9,-1.1C-91.8,-15.6,-86.3,-31.1,-74.7,-39C-63,-47,-45.3,-47.3,-31.8,-45.3C-18.3,-43.3,-9.2,-38.9,3.7,-45.2C16.5,-51.6,33,-68.7,46.1,-70.5Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;

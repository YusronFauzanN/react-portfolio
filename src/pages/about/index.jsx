import React from "react";
import Navbar from "../../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="about" className="pt-36 pb-32">
          <div className="container">
            <div className="flex flex-wrap text-left">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h4 className="font-bold uppercase text-sky-600 mb-3 text-lg">
                  TENTANG SAYA
                </h4>
                <h2 className="font-bold text-3xl mb-5 max-w-md lg:text-3xl">
                  Data Diri
                </h2>
                <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                  Nama lengkap saya, Yusron Fauzan Nasrullah, umur 21 tahun.
                  Hobi saya bermain game, mempelajari hal baru terutama dalam
                  dunia programming.
                </p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                  Pendidikan
                </h3>
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                  Saya lulusan dari SMK 1 Katapang dengan jurusan Rekayasa
                  Perangkat Lunak. Saat ini saya sedang menempuh kuliah di
                  Universitas Islam Nusantara dengan program studi Teknik
                  Informatika.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.youtube.com/channel/UCPEcMDJH34UiWe843e3t-Zg"
                    className="mx-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a
                    href="https://instagram.com/yusronf7?igshid=OGQ5ZDc2ODk2ZA=="
                    className="mx-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://github.com/YusronFauzanN"
                    className="mx-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

import React from "react";
import Navbar from "../../components/navbar";

class Interest extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <section id="about" className="pt-36 pb-32">
          <div className="container">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-center text-sky-600 mb-2">
                MORE ABOUT ME
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Interest
              </h2>
            </div>
            <div className="flex flex-wrap text-left">
              <div className="w-full px-4 lg:w-1/2">
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                  Saya percaya bahwa dunia programming terus berkembang, dan
                  saya berkomitmen untuk selalu memperbarui pengetahuan dan
                  keterampilan saya. Setiap bulan, saya berusaha untuk
                  mempelajari konsep baru, bahasa pemrograman, atau alat baru
                  yang bisa meningkatkan efisiensi dan kualitas proyek.
                </p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                  Saya menemukan bahwa mengeksplorasi berbagai bahasa
                  pemrograman, terutama yang berkaitan dengan pengembangan
                  backend, sangat memikat. Saat ini, saya sedang berfokus pada
                  pembelajaran bahasa seperti TypeScript dan memahami framework
                  seperti Nest JS untuk menggali lebih dalam tentang kelebihan
                  dan manfaatnya dalam pengembangan sistem backend yang kuat dan
                  efisien.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Interest;

import React from 'react';

import IndexNavbar from '../components/Navbars/IndexNavbar';
import Footer from '../components/Footers/Footer';

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Welcome to Mundo Balloon Admin Site
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                If you are seeing this means you want to do some admin work for
                Mundo Balloon if you are a customer go to.
                <a
                  href="https://mundoballoon.com"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mundo Balloon Customers Site
                </a>
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
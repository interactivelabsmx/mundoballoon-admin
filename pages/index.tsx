import React from 'react';

import Footer from '../components/Footers/Footer';

const Index = (): JSX.Element => (
  <>
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
    </section>
    <Footer />
  </>
);

export default Index;

import React from "react";
import heroImage from "../images/ws-me-point-reyes-2017.jpg"
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`jeffl`, `jeff`, `leibensperger`, `workday`]}
        title="Home"
      />

      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <div>
              <h1 className="px-4 pt-5 text-2xl text-left text-black-500 font-bold sm:text-3xl border-l-4">
                Hi There!
              </h1>
              <br />
              <br />
              <blockquote className="pl-4 leading-loose text-justify border-l-4 border-gray-900">
                Welcome to my website. There may not be too much to do here, but thanks for looking around. Feel free to stop by anytime.
              </blockquote>
              <br />
              <br />
            </div>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Pt. Reyes National Seashore"
          ></img>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;

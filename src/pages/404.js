import React from "react";
import Layout from "../components/layout";
import notFoundImage from "../images/not-found-image.svg";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
        </main>
    </Layout>
  );
}

export default NotFoundPage;

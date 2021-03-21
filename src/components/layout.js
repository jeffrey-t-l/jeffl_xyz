import PropTypes from "prop-types";
import React from "react";
import SEO from "./seo";
import { Link } from "gatsby"

function Layout({ children }) {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <nav className="flex items-center justify-between flex-wrap p-6 bg-black text-white font-semibold">
          <div className="flex items-left flex-no-shrink text-white mr-6">
            {/*<svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
            <Link to="/"><span className="font-semibold text-xl tracking-tight">Jeff Leibensperger</span></Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="/books/"  replace>
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Good Reads
                </span>
              </Link>
              <Link to="/resume/"  replace>
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Work Experience
                </span>
              </Link>
              <Link to="/invites/" replace>
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Referral Codes
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
            <div  className="text-sm">
              <a href="https://github.com/jeffrey-t-l/" target="_blank" rel="noreferrer"
                    className="p-4 bg-black text-white text-xs rounded shadow hover:bg-gray-700">
                    GitHub
              </a>
            </div>
            <div  className="text-sm">
              <a href="https://www.linkedin.com/in/jeffleibensperger/" target="_blank" rel="noreferrer"
                    className="p-4 bg-black text-white text-xs rounded shadow hover:bg-gray-700">
                    LinkedIn
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="p-16 bg-black text-gray-600 text-xs text-right align-bottom">
          <div>Icons by <a href="https://www.freepik.com"  target="_blank" rel="noreferrer" title="Freepik">Freepik</a></div>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import Link from "next/link";
import React from "react";

const TopLinks = ({ topLinks }) => {
  return (
    <section className="py-5 sm:py-7 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
          {topLinks.map((link, indexx) => (
            <li className="inline-flex items-center" key={indexx}>
              <Link
                href={link.url}
                className="text-gray-600 hover:text-blue-600"
              >
                {link.name}
              </Link>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TopLinks;

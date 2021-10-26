/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by{" "}
        <a
          key="website"
          href="https://evolveme.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evolve Studio 
        </a>{" "}
        w/ Strapi.
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;

import React from "react";

function About(props) {
  return (
    <div className="about">
      <p>
        ACNHDex is a training project and claims no ownership of any intellectual property associated with Nintendo or Animal Crossing. All assets
        found on the site and repository are the sole property of Nintendo and are only used for non-commercial and educational purpose.
      </p>
      <p>
        All the JSON data comes from the{" "}
        <a href="http://acnhapi.com/?fbclid=IwAR3PT0F2HFiQeHdrpPve42Dftxz0i1FFVBHNbJ6S-6k5SdwB_rZLtwz4TS0" className="link">
          ACNH API
        </a>
        , created by Alexis LOURS. The data from the API is under CC BY 4.0 license, images and music assets are the sole property of Nintendo.
      </p>
    </div>
  );
}

export default About;

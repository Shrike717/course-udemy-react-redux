import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return(
    <div>
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          <GoCloudDownload />
          By Now!
          </Button>
      </div>
      <div>
        <Button success outline className="mb-5">
          <GoDatabase />
          See Deal!
          </Button>
      </div>
      <div>
        <Button warning className="mb-5">Hide Ads!</Button>
      </div>
      <div>
        <Button danger rounded outline className="mb-5">Delete!</Button>
      </div>
    </div>
  )
};

export default ButtonPage;

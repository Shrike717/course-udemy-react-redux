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
        <Button secondary>
          <GoCloudDownload />
          By Now!
          </Button>
      </div>
      <div>
        <Button success outline>
          <GoDatabase />
          See Deal!
          </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger rounded  outline>Delete!</Button>
      </div>
    </div>
  )
};

export default ButtonPage;

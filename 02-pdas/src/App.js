import React from "react";
import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>
        Personal Digital Assistants
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

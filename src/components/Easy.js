import React from "react";
import "./easy.css";
import Feature from "./Feature";
import { Button } from "react-bootstrap";

const Easy = () => {
  return (
    <>
      <div className="info m-3">
        <div className="heading">
          Shopping on pineapple store 
          is very easy
        </div>

        <Feature
          icon="charm:people"
          heading="Create a Trela ​​Group for your neighborhood"
          description={[
            "Just click on Create a Group and we'll open an exclusive WhatsApp group ",
            <br />,
            "for you and your neighbors.",
          ]}
        />
        <Feature
          icon="akar-icons:share-box"
          heading="Forward invitations to your neighbors"
          description={[
            "Just click on Create a Group and we'll open an exclusive WhatsApp group ",
            <br />,
            "for you and your neighbors.",
          ]}
        />
        <Feature
          icon="bi:stars"
          heading="Earn 10 tasting kits for inviting neighbors"
          description={[
            "Just click on Create a Group and we'll open an exclusive WhatsApp group ",
            <br />,
            "for you and your neighbors.",
          ]}
        />
        <Feature
          icon="iconoir:refresh-double"
          heading="Access the best premium product offers and sweepstakes"
          description={[
            "Just click on Create a Group and we'll open an exclusive WhatsApp group ",
            <br />,
            "for you and your neighbors.",
          ]}
        />
        <Feature
          icon="mdi:truck-fast-outline"
          heading="Receive at your doorstep with Free Shipping"
          description={[
            "Just click on Create a Group and we'll open an exclusive WhatsApp group ",
            <br />,
            "for you and your neighbors.",
          ]}
        />
        <div className="button mb-3">
          <Button variant="danger" className="rounded-pill color1" size="lg">
            create a group
          </Button>
        </div>
      </div>
      <div className="mobile"></div>
    </>
  );
};
export default Easy;

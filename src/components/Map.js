import React from "react";
import map1 from "../images/map1.PNG";
import "./map.css";
import { Button } from "react-bootstrap";
const Map = () => {
  const data = [
    {
      place: "Kochi",
      place2: "near to the beach",
    },
    {
      place: "calicut",
      place2: "near hilite mall",
    },
    {
      place: "Malappuram",
      place2: "near to the beach",
    },
  ];
  return (
    <div className="map">
      <div className="headingm">And Where are the Pineapple store groups?</div>
      <div className="mapimage ms-2 me-4 my-3">
        <img className="rounded" src={map1} alt="" />
      </div>

      <div className="row">
        {data.map((datas) => (
          <div className=" col-lg-6  col-md-12 col-sm-6 p-3 col-xl-3 col-12">
            <h2 className="res">{datas.place}</h2>
            <p>{datas.place2}</p>
          </div>
        ))}
      </div>

      <div className="button2 ms-4 me-5">
        <Button variant="danger" className="rounded-pill color ms-2" size="lg">
          create a group
        </Button>
      </div>
    </div>
  );
};
export default Map;

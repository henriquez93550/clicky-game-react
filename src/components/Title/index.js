import React from "react";
import "./style.css";

const Title = props => (
  <div className="title">
  <div className="panel panel">
    <div className="panel-heading panel">
      <div className="row">
        <div className="col-md-4">Clicky Game!</div>
        <div className="col-md-4">{props.display}</div>
        <div className="col-md-2">Score: {props.score} </div>
        <div className="col-md-2">High Score: {props.topScore}</div>
      </div>
    </div>
    <div className="panel-body">
      Click on an image to earn points, but don't click on any more than once!
    </div>
  </div>
  </div>
);

export default Title;

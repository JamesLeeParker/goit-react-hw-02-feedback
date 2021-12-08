import { Component } from "react";
import Feedback from "../Feadback/Feadback";

export default function App() {
  return (
    <div>
      <h1>Please leave feadback</h1>
      <Feedback good={0} neutral={0} bad={0} />
    </div>
  );
}

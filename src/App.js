import React from "react";
import atomize from "@quarkly/atomize";
import "./styles.css";

const InputTable = ({
  th1 = "First Name",
  th2 = "Last Name",
  td1 = "Alfred",
  td2 = "Nobel",
  td3 = "Nikola",
  td4 = "Tesla",
  ...props
}) => (
  <div {...props}>
    <table>
      <tr>
        <th>{`${th1}`}</th>
        <th>{`${th2}`}</th>
      </tr>
      <tr>
        <td>{`${td1}`}</td>
        <td>{`${td2}`}</td>
      </tr>
      <tr>
        <td>{`${td3}`}</td>
        <td>{`${td4}`}</td>
      </tr>
    </table>
  </div>
);

const Table = atomize(InputTable)({
  name: "First Name",
  description: "",
  propInfo: {
    th1: {
      control: "input",
      category: "Main"
    },
    th2: {
      control: "input",
      category: "Main"
    },
    td1: {
      control: "input",
      category: "Main"
    },
    td2: {
      control: "input",
      category: "Main"
    }
  }
});

export default Table;

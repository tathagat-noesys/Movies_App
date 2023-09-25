import React from "react";

const TableComponent = ({ heading, data, children }: tableInterface) => {
  return (
    <table
      style={{
        width: "100%",
        border: "2px aolid blue",
        display: "block",
        margin: "auto",
      }}
    >
      <thead>
        <tr>
          {heading?.map((el) => (
            <th>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tbody>
          <tr
            style={{
              width: "100%",

              display: "block",
              margin: "auto",
              border: "0px",
            }}
          >
            <td
              style={{
                width: "100%",

                display: "block",
                margin: "auto",
                border: "0px",
              }}
            >
              {data}
            </td>
            <td
              style={{
                width: "100%",

                display: "block",
                margin: "auto",
                border: "0px",
              }}
            >
              {children}
            </td>
          </tr>
        </tbody>
      </tbody>
    </table>
  );
};

interface tableInterface {
  heading: string[];
  data: string[] | number[];
  children?: React.ReactNode;
}

export default TableComponent;

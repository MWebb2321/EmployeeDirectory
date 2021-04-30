import React from "react";

function ResultList(props) {
  return (
    <table className="table">
      {props.results.map((result) => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
        </table>
      ))}
      {/* </ul> */}
    </table>
  );
}

export default ResultList;

import React from "react";

function ResultList(props) {
  return (
    <table className="table table-hover">
      <caption>List of employees</caption>
      <thread class="thread-dark">
        <tr>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thread>
      <tbody>
        {props.results.map((result) => (
          <tr>
            <td>
              <img alt={result.name.first} src={result.name.last}></img>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;

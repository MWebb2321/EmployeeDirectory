import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";
const MaxResults = 20;

class SearchResultContainer extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }
}

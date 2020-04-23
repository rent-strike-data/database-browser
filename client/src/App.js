import React, { forwardRef } from 'react';
import axios from 'axios';
import MaterialTable from "material-table";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const tableIcons = {
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

const tableFieldList = [
  { title: "Property Id", field: "p_id", hidden: false },
  { title: "Address", field: "address", hidden: false },
  { title: "City", field: "city", hidden: false },
  { title: "Zip", field: "zip", hidden: false },
  { title: "Zip +4", field: "zip4", hidden: false },
  { title: "Employer", field: "employer_name", hidden: false },
  { title: "Contact ID", field: "salesforce_id", hidden: false },
  { title: "IP Address", field: "ip_address", hidden: false },
  { title: "Agency Number", field: "agency_number", hidden: false },
  { title: "Subdivision", field: "account_subdivision", hidden: false }
];

export class App extends React.Component {

  state = {
    loading: false,
    properties: []
  };

  componentDidMount() {
    this.getProperties();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.properties.length) {
      this.getProperties();
    }
  }

  getProperties() {
    const newState = {...this.state}
    newState.loading = true;
    this.setState({...newState});
    axios.get(`${BASE_URL}/properties`)
      .then((response) => {
        if (response.status >299 || response.status <200) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          const newState = {...this.state}
          newState.loading = false;
          this.setState({...newState});
        } else {
          const newState = {...this.state}
          newState.loading = false;
          newState.properties = [...response.data]
          this.setState({...newState});
        }
        })
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;
    return (
      <div data-test="component-submissions-table" className="root">
        <div className={classes.section}>
          <h2
            className="head"
            style={{ paddingTop: 20 }}
          >
            Portland Properties
          </h2>
          <h3
            className="subhead"
            style={{ paddingTop: 20 }}
          >
            Search by address to find property owners. Search by owner name to find all properties owned by that owner.
          </h3>
          <div className="gridWrapper">
            <MaterialTable
              style={{ width: "100%", margin: "0 20px" }}
              columns={tableFieldList}
              isLoading={this.state.loading}
              data={this.state.properties}
              title="Portland Properties"
              options={{
                filtering: true,
                sorting: true
              }}
              icons={tableIcons}
            />
          </div>
        </div>
      </div>
    );
  }
}


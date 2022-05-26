import React, { Component } from "react";
import JobList from "./JobList";
import SearchResult from "./SearchResult";
import { Navigate   } from 'react-router-dom'

class Home extends Component {
    state = {
        isSearch: false,
        descQuery: "",
        locQuery: "",
      };

    SearchJob(){
        const descInput = document.getElementById('descInput').value
        const locInput = document.getElementById('locInput').value
        this.setState({['descQuery']: descInput});
        this.setState({['locQuery']: locInput});

        this.setState({['isSearch']: true});

        if(descInput === "" && locInput === ""){
            this.setState({['isSearch']: false});
        }

        // console.log(this.state);
    }
    

    render() {
        //kalo belum login di bakalan direct ke page login
        if(this.props.login == false){
            return <Navigate to="/login" push={true} />
        }

        let content;
        let content2;
        content = (
            
                <div className="form-field d-flex">
                
                    <div className="mb-3 m-3">
                        <label htmlFor="descInput" className="form-label"><strong>Job Description</strong></label>
                        <input type="text" className="form-control" id="descInput" size="50"
                            placeholder="Filter by title, benefits, companies, expertise"></input>
                    </div>
                    <div className="mb-3 m-3">
                        <label htmlFor="locInput" className="form-label"><strong>Location</strong></label>
                        <input type="text" className="form-control" size="50" id="locInput" 
                            placeholder="Filter by city, state, zip code or country"></input>
                    </div>
                    <div className="btn-search mr-5">
                        <button className="btn btn-secondary" type="submit" onClick={() => this.SearchJob()}>Search</button>
                    </div>
                
                </div>
            
        );

        if(this.state.isSearch){
            content2 = (
                <div className="border mx-3 p-3">
                    <SearchResult descQuery={this.state.descQuery} locQuery={this.state.locQuery}/>
                </div>
            )

        } else {
            content2 = (
                <div className="border mx-3 p-3">
                    <JobList/>
                </div>
            )
            
        }
        

        return (
            <div>
                {content}
                <div className="job-list">
                {content2}
                </div>
            </div>
        );
    }
}
  
  export default Home;
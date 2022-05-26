import React, { Component, useState } from "react";
// import JobList from "./JobsList";
// import SearchResult from "./SearchResult";

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

        if(descInput == "" && locInput == ""){
            this.setState({['isSearch']: false});
        }

        console.log(this.state);
    }
    

    render() {
        let content;
        let content2;
        content = (
            
                <div className="form-field d-flex">
                
                    <div className="mb-3">
                        <label htmlFor="descInput" className="form-label">Job Description</label>
                        <input type="text" className="form-control" id="descInput" size="50"
                            // onChange={(e) => this.setDesc(e.target.value)} 
                            placeholder="Filter by title, benefite, companies, expertise"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locInput" className="form-label">Location</label>
                        <input type="text" className="form-control" size="50" id="locInput" 
                            // onChange={(e) => this.setLoc(e.target.value)} 
                            placeholder="Filter by title, benefite, companies, expertise"></input>
                    </div>
                    <div className="btn-search">
                        <button className="btn btn-primary" type="submit" onClick={() => this.SearchJob()}>Search</button>
                    </div>
                
                </div>
            
        );

        if(this.state.isSearch){
            content2 = (
                <div>
                    <p>Hai</p>
                    {/* <SearchResult descQuery={this.state.descQuery} locQuery={this.state.locQuery}/> */}
                </div>
            )

        } else {
            content2 = (
                <div>
                    <p>Halo</p>
                    {/* <JobList/> */}
                </div>
            )
            
        }
        

        return (
            <div>
                {content}
                <div>
                {content2}
                </div>
            </div>
        );
    }
}
  
  export default Home;
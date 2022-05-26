import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "./Loader";
import JobHolder from "./JobHolder";

function SearchResult(props) {
    const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${props.descQuery}&location=${props.locQuery}`;
    const [jobs, setJobs] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setJobs({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setJobs({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(error => {
                setJobs({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let contents = null;
    let count = 0;

    
    if(jobs.error){
        contents = 
        <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(jobs.loading){
        contents = <Loader></Loader>
    }

    if(jobs.data){
        contents = 
            jobs.data.map((job) => 
                <div key={job.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                    <JobHolder
                        job={job}
                    />
                </div>
                
            )
        count = jobs.data.length;
    }

    

    return (
        <div>
            <h3 className="font-bold text-2xl mb-3">Showing {count} Jobs</h3>
            {contents}
        </div>
    )
}

export default SearchResult;
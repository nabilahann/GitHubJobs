import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import Loader from "./Loader";

function JobDetail() {
    const { id } = useParams()
    const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
    const navigate = useNavigate();
    const [job, setJob] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setJob({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setJob({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(error => {
                setJob({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null

    if(job.error){
        content = 
        <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(job.loading){
        content = <Loader></Loader>
    }

    if(job.data != null){
        // console.log(job.data.length)
        content = 
        <div className="job-detail">
            <p>{job.data.type}/{job.data.location}</p>
            <h1 className="text-2xl font-bold mb-3">
                {job.data.title}
            </h1>
            <div>
                <img
                    src={job.data.company_logo}
                    alt={job.data.name}
                />
            </div>
            <div dangerouslySetInnerHTML={{__html: job.data.description}} />
        </div>
    } else {
        content = 
        <div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    return (
        
        <div className="container mx-auto">
            <div className="btn-back mx-auto">
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            {content}
        </div>
        
    )
    
}

export default JobDetail;
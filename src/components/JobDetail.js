import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
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
        <div className="job-detail border p-3">
            <div className="border-bottom">
                <p className="text-muted mb-0 ml-5">{job.data.type}/{job.data.location}</p>
                <h1 className="text-2xl font-bold mb-3 mt-0">
                    {job.data.title}
                </h1>
            </div>
            
            <div className="p-3">
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
            <div className="btn-back mx-auto pt-3">
                {/* <button onClick={() => navigate('/')}>Back</button> */}
                <Link to={`/`} className="text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <strong> Back</strong>
                </Link>
            </div>
            {content}
        </div>
        
    )
    
}

export default JobDetail;
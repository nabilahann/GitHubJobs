import React, { useState, useEffect } from 'react';
import JobHolder from './JobHolder';
import axios from 'axios';

function JobList() {
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [jobs, setJobs] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
          method: 'GET',
          url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${pageNumber}`,
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setJobs(prevJobs => {
            return [...new Set([...prevJobs, ...res.data.map((job) => job
            )])]
          })
          if(pageNumber < 2) {
            setHasMore(true)
          } else {
            setHasMore(false)
          }
        //   setHasMore(res.data.length > 0)
          setLoading(false)
        }).catch(e => {
          if (axios.isCancel(e)) return
          setError(true)
        })
        return () => cancel()
      }, [pageNumber])

    function MoreJobs() {
        setPageNumber(pageNumber + 1);
    }

    return (
        <>
        <h3 className="font-bold text-xl mb-3">Job List</h3>
        {jobs.map((job, index) => {
            if(job != null){
                return (
                    <div key={job.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                        <JobHolder
                            job={job}
                        />
                    </div>
                )
                
            } 
        })}

        <div className="loading">{loading && 'Loading...' }</div>
        <div>{error && 'Error'}</div>
        <div>{hasMore && <button type="button" className="more-btn"  onClick={() => MoreJobs()}>More Jobs</button>}</div>
        </>
        
    )

}

export default JobList;
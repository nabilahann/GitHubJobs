import React, { useState, useRef, useCallback } from 'react';
import useJobSearch from './hook/useJobSearch';
import JobHolder from './JobHolder';

function JobList() {
    const [pageNumber, setPageNumber] = useState(1)

    const {
        jobs,
        hasMore,
        loading,
        error
    } = useJobSearch(pageNumber)

    const observer = useRef()
    const lastJobsElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <>
        <h3 className="font-bold text-xl mb-3">Job List</h3>
        
        {jobs.map((job, index) => {
            if(job != null){
                if (jobs.length === index + 1) {
                    return (
                        <div ref={lastJobsElementRef} key={job.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                            <JobHolder
                                job={job}
                            />
                        </div>
                    )
                } else {
                    return (
                        <div key={job.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                            <JobHolder
                                job={job}
                            />
                        </div>
                    )
                }
            }
            
        })}
        <div>{loading && 'Loading...' }</div>
        <div>{error && 'Error'}</div>
        </>
    )

}

export default JobList;
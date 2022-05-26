import React from 'react'
import { Link } from 'react-router-dom'

function JobHolder(props){
    return (
        <div className="border-top overflow-hidden ">
            <Link to={`/detail/${props.job.id}`}
                className="text-decoration-none"
            >
                <div className="pt-3 pb-3 d-flex">
                    <div className="col-8">
                        <h5 className="text-xl mb-3 ">
                                { props.job.title }
                        </h5>
                        <div className="font-bold mb-3">
                            <span className='text-muted'>{ props.job.company }</span> - <span className='text-success'><strong>{ props.job.type }</strong></span>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="mb-3 text-black">
                            <p className="text-end">{ props.job.location }</p>
                        </div>
                        <div className="mb-3 text-black">
                            <p className="text-end text-muted">{ props.job.created_at }</p>
                        </div>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default JobHolder
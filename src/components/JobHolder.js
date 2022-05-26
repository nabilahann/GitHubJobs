import React from 'react'
import { Link } from 'react-router-dom'

function JobHolder(props){
    return (
        <div className="border-top border-bottom mb-4 overflow-hidden">
            <Link to={`/detail/${props.job.id}`}
                            className="text-decoration-none"
                    >
            <div className="p-3">
                <h5 className="text-xl mb-3 ">
                    
                        { props.job.title }
                    {/* </Link>     */}
                </h5>
                <div className="font-bold mb-3">
                    <span className='text-muted'>{ props.job.company }</span> - <span className='text-success'><strong>{ props.job.type }</strong></span>
                </div>

                <div className="mb-3 text-black">
                    { props.job.location }
                </div>
                <div className="mb-3 text-black">
                    { props.job.created_at }
                </div>

                {/* <Link 
                    to={`/detail/${props.job.id}`}
                    className="bg-blue-500 text-black p-2 flex justify-center w-full"
                >
                    View
                </Link> */}
            </div>
            </Link>
        </div>
    )
}

export default JobHolder
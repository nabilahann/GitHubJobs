import { useEffect, useState } from 'react'
import axios from 'axios'

function useJobSearch(pageNumber) {
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
      setHasMore(res.data.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, jobs, hasMore }
}

export default useJobSearch;
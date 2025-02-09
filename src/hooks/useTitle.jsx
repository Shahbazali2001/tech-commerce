import React from 'react'
import { useEffect } from 'react'

const useTitle = (title) => {
  return (
    useEffect(() => {
        document.title = `${title} | Tech Commerce`
    }, [title])
  )
}

export default useTitle
import React from 'react'

function Content(props) {
  return (
    <div className='content'>
        <h1>{props.num}</h1>
    </div>
  )
}

export default React.memo(Content);

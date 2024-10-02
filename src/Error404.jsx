import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <section>
            <h1>oops broken link!</h1>
            <Link to={'/shop'}><p>Click here to continue shopping</p></Link>
        </section>
    )
}

export default Error404

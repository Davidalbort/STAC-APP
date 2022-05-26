import React from 'react'

const Loading = () => {
    const array = [1,2,3];
    const loading = array.map(item => (<div class="container">
    <div class="background">
        <div class="paragraph"></div>
    </div>
</div>));
    return(
        <div className='container-loading'>
            {loading}
     
        </div>
    )
}

export { Loading };
import React from 'react'

function Homepage() {
    return (
        <section className='h-full w-full pt-32'>
            <div className='h-3/5 w-1/5 mx-auto border-2 border-zinc-50 rounded-lg' id='Home Card'>
                <div className='h-9 w-11/12 mx-auto my-2 mt-4 border-2 border-zinc-50 rounded-md flex'>
                    <p className='text-neutral-50 mx-2 mr-4 my-1'>Never Didn't Have it</p><p className='text-neutral-50 ml-36 my-1'><span className='bg-neutral-600 rounded-full px-1'>6</span></p>
                </div>
                <div className='h-2/5 w-11/12 mx-auto my-2 border-2 border-zinc-50 rounded-md'></div>
                <div className='h-9 w-11/12 mx-auto my-2 border-2 border-zinc-50 rounded-md'>
                    <p className='text-neutral-50 mx-2 my-1'>Artifact &#8212; Deck Builder</p>
                </div>
                <div className='h-1/3 w-11/12 mx-auto my-2 border-2 border-zinc-50 rounded-md'>
                    <p className='text-neutral-50 mx-2 my-4'><span className='bg-neutral-600 rounded-full px-1'>&#8631;</span>, Sign in: Target permanent gains access to an online deckbuilding experience.</p>
                    <p className='text-neutral-50 text-sm italic mx-2 my-8'>"A nerdy final project to cap off a nerdy school experience"</p>
                </div>
            </div>
        </section>
    )
}

export default Homepage;
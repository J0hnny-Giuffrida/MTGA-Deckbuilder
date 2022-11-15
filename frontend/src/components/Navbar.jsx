import React from "react";

function Navbar() {
    return (
        <header className="font-roboto w-screen h-28 bg-neutral-800 px-10">
            <nav className="w-screen h-1/8 grid grid-cols-12 text-lg text-center pt-10">
                <div className="flex-none w-full h-full text-zinc-50 text-center">
                    <a className='hover:text-sky-400' href=''>
                        <button className="text-sky-400">01.</button> Your Decks
                    </a>
                </div>
                <div className="flex-none w-full Sh-full text-zinc-50 text-center">
                    <a className='hover:text-violet-400' href=''>
                        <button className="text-violet-400">02.</button> Deck Builder
                    </a>
                </div>
                <div className="flex-none w-full h-full  text-zinc-50 text-center col-start-11 pb-1">
                    <a href=''>
                        <button class="text-zinc-50 ring-2 ring-zinc-50 rounded p-2 px-4 transition ease-in-out delay-100 hover:bg-zinc-50/50 duration-300 ...">
                            Sign Out
                        </button>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
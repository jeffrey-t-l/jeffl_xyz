import React from "react"
import Layout from "../components/layout"

const Invites = () => {
    return (
      <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-evenly">
            <div>
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Wealthfront</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get your <a href='https://www.wealthfront.com/c/affiliates/invited/AFFA-412Q-RJHO-P9IK' target="_blank" rel="noreferrer">first $5,000 managed for free</a></div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Fundrise</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get your <a href='http://fundrise.com/r/r7ne7' target="_blank" rel="noreferrer">first 90 days entirely free of fees</a></div>
                </div>               
                 <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Robinhood</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get <a href='https://join.robinhood.com/jeffrel893' target="_blank" rel="noreferrer">free stock</a></div>
                </div>                
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Public</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get more <a href='https://share.public.com/jeffleibensperger' target="_blank" rel="noreferrer">free stock</a></div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Coinbase</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get $10 bucks in Bitcoin <a href='https://www.coinbase.com/join/leiben_it' target="_blank" rel="noreferrer">for free</a></div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Gemini</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Get $10 bucks in Bitcoin <a href='gemini.com/share/e79gvphe' target="_blank" rel="noreferrer">for free</a></div>
                </div>
                <div className="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>BlockFi Credit Card</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700"><a href='https://blockfi.com/credit-card-waitlist/?r=vupsA' target="_blank" rel="noreferrer">Join</a> the waitlist</div>
                </div>
            </div>
        </main>
    </Layout>
    )
}

export default Invites
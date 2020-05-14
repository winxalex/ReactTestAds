import React from 'react'
import AdRow from './AdRow'

export default function AdList({ ads }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="tg-sectionhead">
                        <div className="tg-title">
                            <h2>Latest featured Ads</h2>
                        </div>
                    </div>
                    {
                        ads.map((el, index) =>
                            <AdRow key={index} ad={el} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

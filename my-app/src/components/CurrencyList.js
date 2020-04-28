import React from 'react';
import CurrencyRow from "./CurrencyRow";


export default function CurrencyList({ rates, onGetRates }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="tg-sectionhead">
                        <div className="tg-title">
                            <h2>Currency List filled from GraphQL</h2>
                        </div>
                    </div>
                    <button className="btn-primary" onClick={onGetRates}>Get Rates</button>
                    {
                        rates.map((el, index) =>
                            <CurrencyRow key={index} currency={el.currency} rate={el.rate} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

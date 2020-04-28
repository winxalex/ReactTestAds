import React from 'react'

export default function CurrencyRow({ currency, rate }) {
    return (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    )
}

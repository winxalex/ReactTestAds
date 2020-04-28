import React from 'react'
import { StoreContext } from '../store/Store'
import CurrencyList from '../components/CurrencyList'


export default function CurrencyListStoreConsumer({ ...rest }) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    ({ getState, reducer: { getRates }, apply }) =>
                        <CurrencyList
                            rates={getState().rates}
                            onGetRates={() => apply(getRates, "USD")}
                            {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}
import React from 'react'
import AdList from '../components/AdList'
import { StoreContext } from '../store/Store'

export default function CurrencyListStoreConsumer({ ...rest }) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    ({ getState, reducer: { getAds }, apply }) =>
                        <AdList ads={getState().ads}
                            {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}

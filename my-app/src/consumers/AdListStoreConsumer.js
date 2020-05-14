import React from 'react'
import AdList from '../components/ads/AdList'
import { StoreContext } from '../store/Store'

export default function CurrencyListStoreConsumer({ ...rest }) {
    return (
        <div>
            <StoreContext.Consumer>
                {
                    ({ getState, store: { getAds }, apply }) =>
                        <AdList ads={getState().ads}
                            {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}

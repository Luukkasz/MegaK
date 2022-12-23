import React from 'react';
import {BinanceOneCryptoPairData} from "../../../types/crypto-data";

interface Props {
    onePair: BinanceOneCryptoPairData
}

export const CryptoPrizeOfOnePair = (props: Props) => {

    return (
        <p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>
            {props.onePair.symbol} aktualnie jest handlowane za cenę {props.onePair.weightedAvgPrice}
        </p>
    )

};
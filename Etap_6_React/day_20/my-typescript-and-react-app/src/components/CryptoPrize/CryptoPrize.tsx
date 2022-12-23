import React, {useEffect, useState} from 'react';
import {BinanceOneCryptoPairData} from "../../../types/crypto-data";
import {CryptoPrizeOfOnePair} from "./CryptoPrizeOfOnePair";

export const CryptoPrize = () => {
    const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null)
    const [pair, setPair] = useState<string>('')

    useEffect(() => {
        (async() => {

            const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
            const data = await res.json();
            setData(data);

        })();
    }, [])

    if (data === null) {
        return <p>Wczytywanie danych...</p>
    }

    return (
        <>
            <label>
                Wybierz parę kryptowalutową: <br/>
                <select
                value={pair}
                onChange={e => setPair(e.target.value)}>
                    {
                        data
                            .map(pair => <option value={pair.symbol} key={pair.symbol}> {pair.symbol} </option>)
                    }
                </select>
            </label>

            {
                pair && <CryptoPrizeOfOnePair onePair={data.find(one => one.symbol === pair) as BinanceOneCryptoPairData} />
            }
        </>
    )
}
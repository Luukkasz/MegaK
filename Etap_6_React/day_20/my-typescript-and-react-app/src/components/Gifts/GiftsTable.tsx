import React from "react";
import { GiftEntity } from "types";
import {GiftTableRow} from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => Promise<void>;
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Count</th>
            <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {
            props.gifts.map(gift => <GiftTableRow gift={gift} onGiftsChange={props.onGiftsChange} key={gift.id}/>)
        }
        </tbody>
    </table>
)
import React from "react";
import {GiftEntity} from "types";

interface Props {
    gift: GiftEntity;
    onGiftsChange: () => Promise<void>;
}

export const GiftTableRow = (props: Props) => {
    const deleteGift = async (e: React.MouseEvent) => {
        e.preventDefault()

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}?`)) {
            return
        }

        const res = await fetch(`http://localhost:3002/gift/${props.gift.id}`, {
            method: 'DELETE',
        })

       if(res.status === 400 || res.status === 500) {
           const error = await res.json()
           alert(`Error occured: ${error.message}`)
       }

       await props.onGiftsChange()
    }


    return (
        <tr>
            <td>{props.gift.id}</td>
            <td>{props.gift.name}</td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>Delete</a>
            </td>
        </tr>
    )
}


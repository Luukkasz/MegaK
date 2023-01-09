import React from "react";
import {ChildEntity, GiftEntity} from "types";
import {ChildrenTableRow} from "./ChildrenTableRow";

interface Props {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Gift</th>
        </tr>
        </thead>

        <tbody>
        {
            props.childrenList.map(child => <ChildrenTableRow child={child} giftsList={props.giftsList} key={child.id}/>)
        }
        </tbody>
    </table>
)
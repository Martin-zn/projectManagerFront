import React from 'react'

function RowTable({ activity }) {
    return (
        <tr>
            <td>{activity.name}</td>
            <td>{activity.description}</td>
            <td>{activity.estado}</td>
        </tr>
    )
}

export default RowTable

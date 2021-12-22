import React from 'react'

 export const MiniControllerCard = (items) => {
    const { item } = items
    return (
        <li>{`${item < 10 ? `0` + item : item}`}</li>
    )
}

// export default MiniControllerCard;
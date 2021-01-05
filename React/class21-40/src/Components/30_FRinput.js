import React from 'react'

// Normal function compoenent 

// function FRinput() {
//     return (
//         <div>
//             <input type="text" />  
//         </div>
//     )
// }

// Function component using React.fowardRef()

const FRinput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRinput

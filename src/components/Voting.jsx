import React from 'react'

function Voting({ modernOffice, offsite, increaseModern }) {
    console.log(increaseModern);
    return (
        <div>
            <ul>
                <li>
                    <span>ModernOffice</span> - <span>votes: 1</span><button onClick={() => increaseModern()}>+</button> <button>-</button>
                </li>
                <li>
                    <span>Offsite</span> - <span>votes: 0</span><button>+</button> <button>-</button>
                </li>
            </ul>
        </div>
    )
}

export default Voting

import React from 'react';
import Image from 'next/image'

function Header() {
    return (
        <div className="flex justify-between p-8 pl-24 pr-24">
            <h1>Smiling Food</h1>
            <div className="flex space-x-14 font-medium text-xl">
                <p>
                    Vision
                </p>
                <p>
                    Team
                </p>
                <p>
                    Contact
                </p>
            </div>

        </div>
    );
}

export default Header;
import React from 'react';
import Image from 'next/image';
function Header() {
    return (<div className="flex justify-between p-8 pl-24 pr-24 z-10">
            <Image src="/logo.png" width="140" height="140"></Image>

            <div className="flex space-x-14 font-medium text-2xl items-center justify-center fixed right-10">
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

        </div>);
}
export default Header;

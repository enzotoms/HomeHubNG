'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"; 

const Logo = () => {
    const router = useRouter();
    return (
           <div>
             <Image 
                onClick={() => router.push('/')}
             alt="HomeHubNG Logo"
             className="hidden md:block cursor-pointer"
              width="100"
               height="100" 
               src="/images/pngegg.png"
               />  <a href="http://localhost:3000/" className="text-green-600  sm:text-base text-xs">HomeHubNG</a>
           </div>
    )
}

export default Logo;

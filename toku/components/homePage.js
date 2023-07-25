import React from "react";
import Link from 'next/link'
export default function homePage(){
    return(
        <div>
            <nav>
                <button><Link href={'/login/login'}>Login</Link></button>
                <button><Link href={'signUp/signUp'}>SignUp</Link></button>
                </nav>
        </div>
    )
    }
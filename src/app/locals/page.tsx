'use client';

import { usePathname } from "next/navigation";

export default function Locals(){

    const pathName = usePathname()

    return (
        <div>
            Locals
        </div>
    )
}
'use client';

import { usePathname, useSearchParams, useParams
     } from "next/navigation";

export default function Locals(){

    const pathName = usePathname()

    const paramsSearch = useSearchParams()
    paramsSearch.toString()

    const params = useParams<{slug:string}>()
    params.slug //текущий параметр строки

    return (
        <div>
            Locals
        </div>
    )
}
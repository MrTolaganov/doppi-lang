import React from 'react'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
const DownloadButton = ({ children }: any) => {
    return (
        <Link href={"https://www.mediafire.com/file/ozyqy0f21o67iku/setup-doppi.exe"} className='px-6 my-6 py-3 dark:bg-secondary-bg bg-light-bg rounded-md flex no-underline  items-center gap-2 w-fit'>
            <DownloadIcon /> {children}
        </Link>
    )
}

export default DownloadButton
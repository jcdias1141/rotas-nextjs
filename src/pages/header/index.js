import Link from 'next/link';

export default function Header() {
    return(
        <>
             <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
}
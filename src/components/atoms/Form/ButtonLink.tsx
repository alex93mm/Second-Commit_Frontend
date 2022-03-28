import { Link } from "wouter";

type Props = {
    href: string
    children: Object
}

export default function ButtonLink({ href, children }: Props) {

    return (
        <Link 
            href={href}>
                <button className="min-w-full text-center text-white hover:underline">
            {children}
                </button>
        </Link>
    )
}

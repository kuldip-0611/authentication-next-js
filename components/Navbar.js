import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
    const { data, status } = useSession();
    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className={`main-nav ${!data && status ? "status" : "loaded"}`}>
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>

                {status==='unauthenticated' && data===null && (
                    <li>
                        <Link
                            href="/api/auth/signin"
                            onClick={(e) => {
                                e.preventDefault();
                                signIn();
                            }}
                        >
                            Sign In
                        </Link>
                    </li>
                )}

                {
                    data && (
                        <li>
                            <Link
                                href="/api/auth/signout"
                                onClick={(e) => {
                                    e.preventDefault();
                                    signOut();
                                }}
                            >
                                Sign Out
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navbar;

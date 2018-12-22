import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <Link href="/">
                <a>Inici</a>
            </Link>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
        </div>
        
    );
};

export default Nav;
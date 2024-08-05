import Link from 'next/link';

const Header = () => {
	return (
		<header className='bg-blue-800 text-white shadow-md'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='text-xl font-bold'>Logo</div>

				<nav className='hidden md:flex space-x-4'>
					<Link href='/' className='hover:text-gray-400'>
						Home
					</Link>
					<Link href='/contacts' className='hover:text-gray-400'>
						Contact
					</Link>
				</nav>

				<Link
					className='bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-md'
					href='/app'
				>
					Blog
				</Link>
			</div>
		</header>
	);
};

export default Header;

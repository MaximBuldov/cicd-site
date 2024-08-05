const Footer = () => {
	return (
		<footer className='bg-blue-800 text-white text-center py-2 fixed bottom-0 w-full'>
			<p className='text-sm'>
				&copy; {new Date().getFullYear()} Your Company Name. All rights
				reserved.
			</p>
		</footer>
	);
};

export default Footer;

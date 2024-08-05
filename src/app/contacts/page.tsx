interface IContacts {
	data: {
		id: number;
		attributes: {
			firstName: string;
			lastName: string;
			phone: string;
			email: string;
		};
	};
}

async function getData(): Promise<IContacts> {
	const res = await fetch(`${process.env.ADMIN_API}/contact`);
	return res.json();
}

export default async function Page() {
	const {
		data: {
			attributes: { firstName, lastName, email, phone },
		},
	} = await getData();
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold text-center mb-6'>
				Contact Information
			</h1>
			<div className='max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md'>
				<div className='mb-4'>
					<h2 className='text-xl font-semibold mb-2'>Name</h2>
					<p className='text-gray-300'>
						{firstName} {lastName}
					</p>
				</div>

				<div className='mb-4'>
					<h2 className='text-xl font-semibold mb-2'>Phone</h2>
					<p className='text-gray-300'>{phone}</p>
				</div>

				<div className='mb-4'>
					<h2 className='text-xl font-semibold mb-2'>Email</h2>
					<p className='text-gray-300'>{email}</p>
				</div>
			</div>
		</div>
	);
}

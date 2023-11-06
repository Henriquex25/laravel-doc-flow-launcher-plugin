export const getDocs = (query: string) => {
	const docFound = docs.filter(doc => doc.title.toLowerCase().includes(query));

	return docFound;
};

const docs = [
	{
		title: "Blade",
		url: "https://laravel.com/docs/10.x/blade",
	},
	{
		title: "Validation",
		url: "https://laravel.com/docs/10.x/validation",
	},
	{
		title: "Routing",
		url: "https://laravel.com/docs/10.x/routing",
	},
];
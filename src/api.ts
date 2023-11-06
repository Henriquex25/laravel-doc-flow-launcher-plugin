export const getDoc = (query: string) => {
	const url = docs.filter(doc => doc.selector.toLowerCase().includes(query));
	return url;
};

const docs = [
	{
		url: "https://laravel.com/docs/10.x/blade",
		selector: "Blade",
	},
	{
		url: "https://laravel.com/docs/10.x/routing",
		selector: "Routing",
	},
	{
		url: "https://laravel.com/docs/10.x/validation",
		selector: "Validation",
	},
];
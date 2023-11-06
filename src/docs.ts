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
	{
		title: "Middleware",
		url: "https://laravel.com/docs/10.x/middleware",
	},
	{
		title: "CSRF Protection",
		url: "https://laravel.com/docs/10.x/csrf",
	},
	{
		title: "Controllers",
		url: "https://laravel.com/docs/10.x/controllers",
	},
	{
		title: "HTTP Requests",
		url: "https://laravel.com/docs/10.x/requests",
	},
	{
		title: "Responses",
		url: "https://laravel.com/docs/10.x/responses",
	},
	{
		title: "Views",
		url: "https://laravel.com/docs/10.x/views",
	},
	{
		title: "URL Generation",
		url: "https://laravel.com/docs/10.x/urls",
	},
	{
		title: "Session",
		url: "https://laravel.com/docs/10.x/session",
	},
	{
		title: "Error Handling",
		url: "https://laravel.com/docs/10.x/errors",
	},
	{
		title: "Logging",
		url: "https://laravel.com/docs/10.x/logging",
	},
	{
		title: "Artisan Console",
		url: "https://laravel.com/docs/10.x/artisan",
	},
	{
		title: "Broadcasting",
		url: "https://laravel.com/docs/10.x/broadcasting",
	},
	{
		title: "Cache",
		url: "https://laravel.com/docs/10.x/cache",
	},
	{
		title: "Collections",
		url: "https://laravel.com/docs/10.x/collections",
	},
	{
		title: "Events",
		url: "https://laravel.com/docs/10.x/events",
	},
	{
		title: "File Storage",
		url: "https://laravel.com/docs/10.x/filesystem",
	},
	{
		title: "Helpers",
		url: "https://laravel.com/docs/10.x/helpers",
	},
	{
		title: "HTTP Client",
		url: "https://laravel.com/docs/10.x/http-client",
	},
	{
		title: "Localization",
		url: "https://laravel.com/docs/10.x/localization",
	},
	{
		title: "Mail",
		url: "https://laravel.com/docs/10.x/mail",
	},
	{
		title: "Notifications",
		url: "https://laravel.com/docs/10.x/notifications",
	},
	{
		title: "Process",
		url: "https://laravel.com/docs/10.x/processes",
	},
	{
		title: "Queues",
		url: "https://laravel.com/docs/10.x/queues",
	},
	{
		title: "Rate Limiting",
		url: "https://laravel.com/docs/10.x/rate-limiting",
	},
	{
		title: "String",
		url: "https://laravel.com/docs/10.x/strings",
	},
	{
		title: "Task Scheduling",
		url: "https://laravel.com/docs/10.x/scheduling",
	},
	{
		title: "Authentication",
		url: "https://laravel.com/docs/10.x/authentication",
	},
	{
		title: "Authorization",
		url: "https://laravel.com/docs/10.x/authorization",
	},
	{
		title: "Email Verification",
		url: "https://laravel.com/docs/10.x/verification",
	},
	{
		title: "Password Reset",
		url: "https://laravel.com/docs/10.x/passwords",
	},
	{
		title: "Database",
		url: "https://laravel.com/docs/10.x/database",
	},
	{
		title: "Query Builder",
		url: "https://laravel.com/docs/10.x/queries",
	},
	{
		title: "Pagination",
		url: "https://laravel.com/docs/10.x/pagination",
	},
	{
		title: "Migrations",
		url: "https://laravel.com/docs/10.x/migrations",
	},
	{
		title: "Seeding",
		url: "https://laravel.com/docs/10.x/seeding",
	},
	{
		title: "Eloquent",
		url: "https://laravel.com/docs/10.x/eloquent",
	},
	{
		title: "Relationships",
		url: "https://laravel.com/docs/10.x/eloquent-relationships",
	},
	{
		title: "Eloquent Collections",
		url: "https://laravel.com/docs/10.x/eloquent-collections",
	},
	{
		title: "Mutators & Casting",
		url: "https://laravel.com/docs/10.x/eloquent-mutators",
	},
	{
		title: "API Resources",
		url: "https://laravel.com/docs/10.x/eloquent-resources",
	},
	{
		title: "Serialization",
		url: "https://laravel.com/docs/10.x/eloquent-serialization",
	},
	{
		title: "Factories",
		url: "https://laravel.com/docs/10.x/eloquent-factories",
	},
	{
		title: "Testing",
		url: "https://laravel.com/docs/10.x/testing",
	},
	{
		title: "HTTP tests",
		url: "https://laravel.com/docs/10.x/http-tests",
	},
	{
		title: "Console Tests",
		url: "https://laravel.com/docs/10.x/console-tests",
	},
	{
		title: "Browser Tests",
		url: "https://laravel.com/docs/10.x/dusk",
	},
	{
		title: "Database Testing",
		url: "https://laravel.com/docs/10.x/database-testing",
	},
	{
		title: "Mocking",
		url: "https://laravel.com/docs/10.x/mocking",
	},
	{
		title: "Breeze",
		url: "https://laravel.com/docs/10.x/starter-kits#laravel-breeze",
	},
	{
		title: "Laravel Dusk",
		url: "https://laravel.com/docs/10.x/dusk",
	},
	{
		title: "Laravel Cashier (stripe)",
		url: "https://laravel.com/docs/10.x/billing",
	},
	{
		title: "Laravel Cashier (Paddle)",
		url: "https://laravel.com/docs/10.x/cashier-paddle",
	},
	{
		title: "Laravel Fortify",
		url: "https://laravel.com/docs/10.x/fortify",
	},
	{
		title: "Laravel Envoy",
		url: "https://laravel.com/docs/10.x/envoy",
	},
	{
		title: "Laravel Homestead",
		url: "https://laravel.com/docs/10.x/homestead",
	},
	{
		title: "Laravel Folio",
		url: "https://laravel.com/docs/10.x/folio",
	},
	{
		title: "Laravel Horizon",
		url: "https://laravel.com/docs/10.x/horizon",
	},
	{
		title: "Jetstream",
		url: "https://jetstream.laravel.com/introduction.html",
	},
	{
		title: "Laravel Octane",
		url: "https://laravel.com/docs/10.x/octane",
	},
	{
		title: "Laravel Passport",
		url: "https://laravel.com/docs/10.x/passport",
	},
	{
		title: "Laravel Pennant",
		url: "https://laravel.com/docs/10.x/pennant",
	},
	{
		title: "Laravel Pint",
		url: "https://laravel.com/docs/10.x/pint",
	},
	{
		title: "Precognition",
		url: "https://laravel.com/docs/10.x/precognition",
	},
	{
		title: "Prompts",
		url: "https://laravel.com/docs/10.x/prompts",
	},
	{
		title: "Laravel Sail",
		url: "https://laravel.com/docs/10.x/sail",
	},
	{
		title: "Laravel Sanctum",
		url: "https://laravel.com/docs/10.x/sanctum",
	},
	{
		title: "Laravel Scout",
		url: "https://laravel.com/docs/10.x/scout",
	},
	{
		title: "Laravel Socialite",
		url: "https://laravel.com/docs/10.x/socialite",
	},
	{
		title: "Laravel Telescope",
		url: "https://laravel.com/docs/10.x/telescope",
	},
	{
		title: "Laravel Valet",
		url: "https://laravel.com/docs/10.x/valet",
	},
	{
		title: "API Documentation",
		url: "https://laravel.com/api/10.x/",
	},
	{
		title: "Facades",
		url: "https://laravel.com/docs/10.x/facades",
	},
	{
		title: "Service Providers",
		url: "https://laravel.com/docs/10.x/providers",
	},
	{
		title: "Service Container",
		url: "https://laravel.com/docs/10.x/container",
	},
	{
		title: "Request Lifecycle",
		url: "https://laravel.com/docs/10.x/lifecycle",
	},
	{
		title: "Deployment",
		url: "https://laravel.com/docs/10.x/deployment",
	},
	{
		title: "Configuration",
		url: "https://laravel.com/docs/10.x/configuration",
	},
	{
		title: "Directory Structure",
		url: "https://laravel.com/docs/10.x/structure",
	},
	{
		title: "Frontend",
		url: "https://laravel.com/docs/10.x/frontend",
	},
	{
		title: "Upgrade Guide",
		url: "https://laravel.com/docs/10.x/upgrade",
	},
];
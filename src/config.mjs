export const SITE = {
	name: 'Spinx',

	origin: 'https://Spinx.vercel.app',
	basePathname: '/',

	title: 'Spinx',
	description: '🚀 Spinx is a free and ready to start discord bot developement tool to fit every servers needs.',

	googleAnalyticsId: "G-9MLSQGX2EQ", // or "false",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};

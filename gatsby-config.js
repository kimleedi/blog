module.exports = {
	siteMetadata: {
		title: 'KIMLEEDI',
		author: 'KIMLEEDI',
		description: "KIMLEEDI's personal blog",
		siteUrl: 'https://leedi.me'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-typescript',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							prompt: {
								global: true
							}
						}
					}
				]
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-59980063-4'
			}
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				excludes: ['/blog'],
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://leedi.me',
			  	sitemap: 'https://leedi.me/sitemap.xml',
			  	policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			}
		}
	]
}

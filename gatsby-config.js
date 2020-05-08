module.exports = {
	siteMetadata: {
		title: 'KIMLEEDI',
		description: '김리디의 개인 블로그',
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
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-59980063-4'
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

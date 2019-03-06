module.exports = {
  siteMetadata: {
    title: 'Design + Code',
    description: 'Complete courses about the best tools and design systems. No coding experience required.',
    keywords: 'react course, react for designers, course'
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: 'gatsby-source-contentful',
  		options: {
  			spaceId: 'b6doru5r9d7p',
  			accessToken: '615363523c2407ccc754f78e0d8495269c129c6cce864874e382fa21c7b74081'
  		}
  	}
  ],
}

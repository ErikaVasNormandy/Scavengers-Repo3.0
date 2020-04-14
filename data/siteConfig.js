module.exports = {
  siteTitle: 'Scavengers repo',
  siteDescription: 'A cleaned up attic full of stuff',
  authorName: 'Some Casual',
  twitterUsername: 's0meCasual',
  authorAvatar: 'Spacebunlogo.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/scavengers-repo', // Note: it must *not* have a trailing slash.
  siteCover: 'mtg-island-charcoal.jpg', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/SpacebunlogoCropped.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'Scavengers Repo',
  headerLinksIcon: 'SpacebunlogoCropped.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },

    {
      label: 'Projects',
      url: '/projects',
    },


    {
      label: 'Sketchbook',
      url: '/sketchbook',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Home',
          url: '/',
        },

    	{
     	 label: 'Projects',
      	url: '/projects',
    	},

        {
          label: 'Sketchbook',
          url: '/sketchbook',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ErikaVasNormandy',
        },
        {
          label: 'Artstation',
          url: 'https://www.artstation.com/erikavasnormandy',
        },
        {
          label: 'RedBubble',
          url: 'https://www.redbubble.com/people/technomancer-01/shop',
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/s0meCasual/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/S0meCasual',
        },
      ],
    },
  ],
}

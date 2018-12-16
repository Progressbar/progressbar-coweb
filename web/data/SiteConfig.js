// const dcoreLogo = require("../static/logos/logo_dccore.svg");
// const bitpantherLogo = require("../static/logos/bitpanther-logo.svg");
// const decentLogo = require("../static/logos/decentlogo.svg");
// const hosuLogo = require("../static/logos/hosulogo.png");
// const wyLogo = require("../static/logos/wylogo.svg");
// const pbLogo = require("../static/logos/pb-logo-white.svg");

module.exports = {
  siteTitle: "Progressbar", // Site title.
  siteTitleShort: "Progressbar", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Progressbar", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Progressbar", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Progressbar",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:info@progressbar.sk",
      iconClassName: "fa fa-envelope"
    }
  ],
  // https://github.com/Progressbar/Progressbar-Improvement-Proposal/issues/125
  designTokens: {
    blue: "#3a10ff",
    purple: "#a100de",
    pink: "#fa21d0",
    orange: "#ee650c",
    yellow: "#feb229"
  },
  copyright: `2010 - ${new Date().getFullYear()} © Progressbar`, // todo current year
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  socialLinks: [
    {
      url: "https://www.facebook.com/progressbar",
      title: "Facebook",
      icon: "facebook f"
    },
    {
      url: "https://www.instagram.com/progressbar_sk",
      title: "Instagram",
      icon: "instagram"
    },
    { url: "https://github.com/Progressbar", title: "Github", icon: "github" },
    {
      url: "https://t.me/coworkprogressbar",
      title: "Telegram",
      icon: "telegram"
    },
    {
      url: "https://m.me/progressbar",
      title: "Messenger",
      icon: "facebook messenger"
    }
  ],
  address: {
    street: "Dunajská 7495/14",
    pobox: "811 08",
    city: "Bratislava",
    country: "Slovakia",
    osm: "https://www.openstreetmap.org/node/1096120193",
    gmaps: "https://goo.gl/maps/piJwx6AAB762"
  },
  contacts: [
    {
      url: "https://t.me/coworkprogressbar",
      title: "Telegram",
      icon: "telegram"
    },
    {
      url: "mailto:info@progressbar.sk",
      title: "info@progressbar.sk",
      icon: "mail"
    },
    {
      url: "https://m.me/progressbar",
      title: "Messenger",
      icon: "facebook messenger"
    }
  ],
  navbarLinks: [
    { to: "/about/", name: "about" },
    { to: "/events/", name: "events" },
    { to: "/membership/", name: "membership" },
    { to: "/sponsors/", name: "sponsors" }
  ],
  sponsors: [
    {
      name: "DCore",
      url: "https://dcore.decent.ch",
      icon: "https://dcore.decent.ch/_web/img/logo_dccore.svg",
      text:
        "Blockchain you can actually build on. Innovative and customizable adaptation of blockchain technology allows you to mix and match DCore components to further your own projects."
    },
    {
      name: "DECENT",
      url: "https://decent.ch",
      icon: "https://decent.ch/wp-content/uploads/2018/04/logo-footer.svg",
      text:
        "Blockchain Content Distribution Platform that is Open-Source and utilizes Blockchain to ensure trust and security. Our intention is to revolutionize data distribution on the Internet."
    },
    {
      name: "BitPanther",
      url: "https://www.bitpanther.com",
      icon: "https://www.bitpanther.com/img/christmas-logo.svg",
      text:
        "European financial technology platform focused on helping people to get access to digital currencies. BitPanther is a registered Slovakian company, compliant with Slovak and EU regulations."
    },
    {
      name:
        "HOSU | Office Solutions is a specialist in complex office solutions",
      url: "http://www.hosu.sk/en/home.html",
      icon: "",
      text:
        "We deal with analysis, design and furnishing of administrative spaces. Our aim is to effectively use the space of an organization and create a friendly workspace in which people work more efficiently and enthusiastically. Our approach focuses primarily on proper acoustics, ergonomics and sustainability. The result of our work is a functional design and comfortable workplace."
    },
    {
      name: "wy",
      url: "https://wy.sk",
      icon: "",
      text:
        "We are your dream hoster, and your best choice for doing business on internet. We provide hosting to company websites, e-shops, blogs, huge portals or private presentations. We welcome individuals and freelancers, small teams and running businesses."
    },
    {
      name: "Your company can be here",
      url: "https://progressbar.sk",
      icon: "",
      text:
        "Want to sponsor us? Your name will be known in our hackerspace & cowork. We hosted 700+ technical and technological events so far. We can give you huge marketing push or find you geeks, engineers, software developers you are searching for. We are their daily place, where their come hangout on evenings or work during day."
    }
  ]
};

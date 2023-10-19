
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

function App() {
  const [items, setItems] = useState(
    {
      "total": 5,
      "total_pages": 1,
      "results": [
        {
          "id": "fPkvU7RDmCo",
          "slug": "macbook-pro-with-images-of-computer-language-codes-fPkvU7RDmCo",
          "created_at": "2017-03-18T22:20:45Z",
          "updated_at": "2023-10-18T21:01:16Z",
          "promoted_at": "2017-03-18T22:20:45Z",
          "width": 5184,
          "height": 3456,
          "color": "#262626",
          "blur_hash": "L342I~fRRPa}9ExZj]aeo$IpoIj[",
          "description": "Coding SQL Query in a PHP file using Atom; my favourite editor to work on web projects",
          "alt_description": "MacBook Pro with images of computer language codes",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1489875347897-49f64b51c1f8"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/macbook-pro-with-images-of-computer-language-codes-fPkvU7RDmCo",
            "html": "https://unsplash.com/photos/macbook-pro-with-images-of-computer-language-codes-fPkvU7RDmCo",
            "download": "https://unsplash.com/photos/fPkvU7RDmCo/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA",
            "download_location": "https://api.unsplash.com/photos/fPkvU7RDmCo/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA"
          },
          "likes": 590,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {},
          "user": {
            "id": "xtXELtEUg1w",
            "updated_at": "2023-09-25T06:54:39Z",
            "username": "casparrubin",
            "name": "Caspar Camille Rubin",
            "first_name": "Caspar Camille",
            "last_name": "Rubin",
            "twitter_username": null,
            "portfolio_url": "https://casparrubin.ch/",
            "bio": "Hey 🙋‍♂️",
            "location": "basel, switzerland",
            "links": {
              "self": "https://api.unsplash.com/users/casparrubin",
              "html": "https://unsplash.com/@casparrubin",
              "photos": "https://api.unsplash.com/users/casparrubin/photos",
              "likes": "https://api.unsplash.com/users/casparrubin/likes",
              "portfolio": "https://api.unsplash.com/users/casparrubin/portfolio",
              "following": "https://api.unsplash.com/users/casparrubin/following",
              "followers": "https://api.unsplash.com/users/casparrubin/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1662894315010-743e3d3bae84image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1662894315010-743e3d3bae84image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1662894315010-743e3d3bae84image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 4,
            "total_likes": 15,
            "total_photos": 47,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://casparrubin.ch/",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "tags": [
            {
              "type": "search",
              "title": "editor"
            },
            {
              "type": "landing_page",
              "title": "background",
              "source": {
                "ancestry": {
                  "type": {
                    "slug": "backgrounds",
                    "pretty_slug": "Backgrounds"
                  }
                },
                "title": "Hq background images",
                "subtitle": "Download free backgrounds",
                "description": "Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
                "meta_title": "Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
                "meta_description": "Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
                "cover_photo": {
                  "id": "fMUIVein7Ng",
                  "slug": "fMUIVein7Ng",
                  "created_at": "2017-05-15T23:49:10Z",
                  "updated_at": "2023-10-15T23:01:23Z",
                  "promoted_at": "2017-05-16T09:06:41Z",
                  "width": 3847,
                  "height": 5583,
                  "color": "#c0d9d9",
                  "blur_hash": "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
                  "description": "After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
                  "alt_description": "closeup photo of black and red building",
                  "breadcrumbs": [
                    {
                      "slug": "images",
                      "title": "1,000,000+ Free Images",
                      "index": 0,
                      "type": "landing_page"
                    },
                    {
                      "slug": "feelings",
                      "title": "Feelings Images",
                      "index": 1,
                      "type": "landing_page"
                    },
                    {
                      "slug": "cool",
                      "title": "Cool Images & Photos",
                      "index": 2,
                      "type": "landing_page"
                    }
                  ],
                  "urls": {
                    "raw": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                    "regular": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                    "small": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                    "thumb": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb"
                  },
                  "links": {
                    "self": "https://api.unsplash.com/photos/fMUIVein7Ng",
                    "html": "https://unsplash.com/photos/fMUIVein7Ng",
                    "download": "https://unsplash.com/photos/fMUIVein7Ng/download",
                    "download_location": "https://api.unsplash.com/photos/fMUIVein7Ng/download"
                  },
                  "likes": 1912,
                  "liked_by_user": false,
                  "current_user_collections": [],
                  "sponsorship": null,
                  "topic_submissions": {
                    "architecture-interior": {
                      "status": "approved",
                      "approved_on": "2020-04-06T14:20:14Z"
                    },
                    "wallpapers": {
                      "status": "approved",
                      "approved_on": "2020-04-06T14:20:09Z"
                    },
                    "color-of-water": {
                      "status": "approved",
                      "approved_on": "2022-04-21T15:04:21Z"
                    }
                  },
                  "premium": false,
                  "plus": false,
                  "user": {
                    "id": "hnq0aaqF_Qo",
                    "updated_at": "2023-10-13T17:33:14Z",
                    "username": "scottwebb",
                    "name": "Scott Webb",
                    "first_name": "Scott",
                    "last_name": "Webb",
                    "twitter_username": null,
                    "portfolio_url": "https://scottwebb.me/",
                    "bio": "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
                    "location": "London, Ontario, Canada",
                    "links": {
                      "self": "https://api.unsplash.com/users/scottwebb",
                      "html": "https://unsplash.com/@scottwebb",
                      "photos": "https://api.unsplash.com/users/scottwebb/photos",
                      "likes": "https://api.unsplash.com/users/scottwebb/likes",
                      "portfolio": "https://api.unsplash.com/users/scottwebb/portfolio",
                      "following": "https://api.unsplash.com/users/scottwebb/following",
                      "followers": "https://api.unsplash.com/users/scottwebb/followers"
                    },
                    "profile_image": {
                      "small": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                      "medium": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                      "large": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "scottwebb",
                    "total_collections": 46,
                    "total_likes": 4169,
                    "total_photos": 804,
                    "accepted_tos": true,
                    "for_hire": true,
                    "social": {
                      "instagram_username": "scottwebb",
                      "portfolio_url": "https://scottwebb.me/",
                      "twitter_username": null,
                      "paypal_email": null
                    }
                  }
                }
              }
            },
            {
              "type": "search",
              "title": "bright"
            }
          ]
        },
        {
          "id": "pCqzMe04s8g",
          "slug": "man-reading-papers-in-front-of-computer-pCqzMe04s8g",
          "created_at": "2019-12-18T11:53:13Z",
          "updated_at": "2023-10-18T20:09:59Z",
          "promoted_at": "2019-12-19T10:02:55Z",
          "width": 10800,
          "height": 7200,
          "color": "#f3f3f3",
          "blur_hash": "LSIXjeEL9Z~qQ,S~%gV@VrxaR*IU",
          "description": "Doctor sitting at his office desk accessing PDQ on his computer in the 1980s. The Physicians Data Query was designed by the National Cancer Institute to help physicians obtain information about the most up-to-date protocols, physicians, and clinics treating cancer patients.\n1987",
          "alt_description": "man reading papers in front of computer",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1576669801775-ff43c5ab079d"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/man-reading-papers-in-front-of-computer-pCqzMe04s8g",
            "html": "https://unsplash.com/photos/man-reading-papers-in-front-of-computer-pCqzMe04s8g",
            "download": "https://unsplash.com/photos/pCqzMe04s8g/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA",
            "download_location": "https://api.unsplash.com/photos/pCqzMe04s8g/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwyfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA"
          },
          "likes": 203,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "business-work": {
              "status": "approved",
              "approved_on": "2020-06-18T14:10:14Z"
            }
          },
          "user": {
            "id": "1QGRbY8xKKc",
            "updated_at": "2023-10-19T02:36:41Z",
            "username": "nci",
            "name": "National Cancer Institute",
            "first_name": "National Cancer Institute",
            "last_name": null,
            "twitter_username": null,
            "portfolio_url": "https://visualsonline.cancer.gov/",
            "bio": "The National Cancer Institute's (NCI) Visuals Online provides a range of photographs and illustrations that may help communicators of medical and public health convey meaning, describe concepts, and tell stories.",
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/nci",
              "html": "https://unsplash.com/@nci",
              "photos": "https://api.unsplash.com/users/nci/photos",
              "likes": "https://api.unsplash.com/users/nci/likes",
              "portfolio": "https://api.unsplash.com/users/nci/portfolio",
              "following": "https://api.unsplash.com/users/nci/following",
              "followers": "https://api.unsplash.com/users/nci/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1576086368754-99727c1b6f81image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1576086368754-99727c1b6f81image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1576086368754-99727c1b6f81image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 7,
            "total_likes": 2,
            "total_photos": 326,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://visualsonline.cancer.gov/",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "tags": [
            {
              "type": "landing_page",
              "title": "computer",
              "source": {
                "ancestry": {
                  "type": {
                    "slug": "wallpapers",
                    "pretty_slug": "HD Wallpapers"
                  },
                  "category": {
                    "slug": "desktop",
                    "pretty_slug": "Desktop"
                  },
                  "subcategory": {
                    "slug": "computer",
                    "pretty_slug": "Computer"
                  }
                },
                "title": "Hd computer wallpapers",
                "subtitle": "Download free computer wallpapers",
                "description": "Choose from a curated selection of computer wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                "meta_title": "Computer Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                "meta_description": "Choose from hundreds of free computer wallpapers. Download HD wallpapers for free on Unsplash.",
                "cover_photo": {
                  "id": "wyEinDRV88I",
                  "slug": "wyEinDRV88I",
                  "created_at": "2016-11-18T21:01:40Z",
                  "updated_at": "2023-10-12T14:11:04Z",
                  "promoted_at": "2016-11-18T21:01:40Z",
                  "width": 7952,
                  "height": 5304,
                  "color": "#c0c0c0",
                  "blur_hash": "LhF$CS?bRjRj~p%LV@WCSiWWWBof",
                  "description": null,
                  "alt_description": "woman taking photo of buildings",
                  "breadcrumbs": [
                    {
                      "slug": "images",
                      "title": "1,000,000+ Free Images",
                      "index": 0,
                      "type": "landing_page"
                    },
                    {
                      "slug": "feelings",
                      "title": "Feelings Images",
                      "index": 1,
                      "type": "landing_page"
                    },
                    {
                      "slug": "cool",
                      "title": "Cool Images & Photos",
                      "index": 2,
                      "type": "landing_page"
                    }
                  ],
                  "urls": {
                    "raw": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3",
                    "full": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                    "regular": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                    "small": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                    "thumb": "https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1479502806991-251c94be6b15"
                  },
                  "links": {
                    "self": "https://api.unsplash.com/photos/wyEinDRV88I",
                    "html": "https://unsplash.com/photos/wyEinDRV88I",
                    "download": "https://unsplash.com/photos/wyEinDRV88I/download",
                    "download_location": "https://api.unsplash.com/photos/wyEinDRV88I/download"
                  },
                  "likes": 591,
                  "liked_by_user": false,
                  "current_user_collections": [],
                  "sponsorship": null,
                  "topic_submissions": {
                    "wallpapers": {
                      "status": "approved",
                      "approved_on": "2020-04-06T14:20:09Z"
                    }
                  },
                  "premium": false,
                  "plus": false,
                  "user": {
                    "id": "WylEZk6e2xA",
                    "updated_at": "2023-10-11T12:26:37Z",
                    "username": "thoughtcatalog",
                    "name": "Thought Catalog",
                    "first_name": "Thought",
                    "last_name": "Catalog",
                    "twitter_username": "thoughtcatalog",
                    "portfolio_url": "http://thoughtcatalog.com/?utm_campaign=platform-link&utm_source=unsplash&utm_medium=profile",
                    "bio": "We're a digital magazine based in Brooklyn. We use Unsplash to share with the world some of our best in-house photography.",
                    "location": "New York",
                    "links": {
                      "self": "https://api.unsplash.com/users/thoughtcatalog",
                      "html": "https://unsplash.com/@thoughtcatalog",
                      "photos": "https://api.unsplash.com/users/thoughtcatalog/photos",
                      "likes": "https://api.unsplash.com/users/thoughtcatalog/likes",
                      "portfolio": "https://api.unsplash.com/users/thoughtcatalog/portfolio",
                      "following": "https://api.unsplash.com/users/thoughtcatalog/following",
                      "followers": "https://api.unsplash.com/users/thoughtcatalog/followers"
                    },
                    "profile_image": {
                      "small": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                      "medium": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                      "large": "https://images.unsplash.com/profile-1479502385647-8aa0d0e9a87b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                    },
                    "instagram_username": "thoughtcatalog",
                    "total_collections": 5,
                    "total_likes": 12,
                    "total_photos": 173,
                    "accepted_tos": true,
                    "for_hire": true,
                    "social": {
                      "instagram_username": "thoughtcatalog",
                      "portfolio_url": "http://thoughtcatalog.com/?utm_campaign=platform-link&utm_source=unsplash&utm_medium=profile",
                      "twitter_username": "thoughtcatalog",
                      "paypal_email": null
                    }
                  }
                }
              }
            },
            {
              "type": "search",
              "title": "test"
            },
            {
              "type": "search",
              "title": "cancer treatment"
            }
          ]
        },
        {
          "id": "_UIVmIBB3JU",
          "slug": "two-hands-_UIVmIBB3JU",
          "created_at": "2018-12-05T16:48:19Z",
          "updated_at": "2023-10-19T02:05:08Z",
          "promoted_at": "2018-12-07T14:35:04Z",
          "width": 5599,
          "height": 3733,
          "color": "#404040",
          "blur_hash": "LTE.^Ut60KRj_3j[IUWBbva}aej[",
          "description": "jewish memorial berlin - human reconnection between love and hate",
          "alt_description": "two hands",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1544027993-37dbfe43562a"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/two-hands-_UIVmIBB3JU",
            "html": "https://unsplash.com/photos/two-hands-_UIVmIBB3JU",
            "download": "https://unsplash.com/photos/_UIVmIBB3JU/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA",
            "download_location": "https://api.unsplash.com/photos/_UIVmIBB3JU/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwzfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA"
          },
          "likes": 2418,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "health": {
              "status": "approved",
              "approved_on": "2021-02-03T12:55:05Z"
            },
            "spirituality": {
              "status": "approved",
              "approved_on": "2020-04-06T14:20:22Z"
            }
          },
          "user": {
            "id": "zYw2OJ152h8",
            "updated_at": "2023-10-13T19:46:27Z",
            "username": "heftiba",
            "name": "Toa Heftiba",
            "first_name": "Toa",
            "last_name": "Heftiba",
            "twitter_username": "toaheftiba",
            "portfolio_url": "http://heftiba.co.uk/",
            "bio": "ᴘʀᴏᴅᴜᴄᴛ | ꜰᴏᴏᴅ | ʟɪꜰᴇꜱᴛʏʟᴇ ᴘʜᴏᴛᴏɢʀᴀᴘʜᴇʀ • ᴀ ꜰᴀɴ ᴏꜰ ᴏᴅᴅ ᴛʜɪɴɢꜱ ᴀɴᴅ ɢᴏᴏᴅ ʜᴜᴍᴏᴜʀ. 🙂\r\n👉🏻ᴄʟɪᴄᴋ ᴛʜᴇ 'ᴄᴏʟʟᴇᴄᴛɪᴏɴꜱ' ᴛᴀʙ ʙᴇʟᴏᴡ ᴛᴏ ᴠɪᴇᴡ ᴍʏ ɪᴍᴀɢᴇꜱ ɪɴ ᴏʀɢᴀɴɪꜱᴇᴅ ꜰᴏʟᴅᴇʀꜱ.  ᴡʜʏ ɴᴏᴛ ꜱᴀʏ ʜᴇʟʟᴏ ⚡️ ɪɢ: @ʜᴇꜰᴛɪʙᴀ.ᴄᴏ.ᴜᴋ ",
            "location": "UK",
            "links": {
              "self": "https://api.unsplash.com/users/heftiba",
              "html": "https://unsplash.com/@heftiba",
              "photos": "https://api.unsplash.com/users/heftiba/photos",
              "likes": "https://api.unsplash.com/users/heftiba/likes",
              "portfolio": "https://api.unsplash.com/users/heftiba/portfolio",
              "following": "https://api.unsplash.com/users/heftiba/following",
              "followers": "https://api.unsplash.com/users/heftiba/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "heftiba.co.uk",
            "total_collections": 42,
            "total_likes": 2435,
            "total_photos": 3528,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "heftiba.co.uk",
              "portfolio_url": "http://heftiba.co.uk/",
              "twitter_username": "toaheftiba",
              "paypal_email": null
            }
          },
          "tags": [
            {
              "type": "search",
              "title": "hands"
            },
            {
              "type": "search",
              "title": "hand"
            },
            {
              "type": "search",
              "title": "connection"
            }
          ]
        },
        {
          "id": "963uzyQwa6s",
          "slug": "silhouette-photography-of-human-hand-raising-963uzyQwa6s",
          "created_at": "2018-11-13T11:16:15Z",
          "updated_at": "2023-10-19T09:05:00Z",
          "promoted_at": null,
          "width": 5184,
          "height": 3456,
          "color": "#c0d9d9",
          "blur_hash": "LmGv9P.7MxtR_N%MRPofIUWBRkay",
          "description": "Hand sky",
          "alt_description": "silhouette photography of human hand raising",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1542107617-e760dc92dcdd?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1542107617-e760dc92dcdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1542107617-e760dc92dcdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1542107617-e760dc92dcdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1542107617-e760dc92dcdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542107617-e760dc92dcdd"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/silhouette-photography-of-human-hand-raising-963uzyQwa6s",
            "html": "https://unsplash.com/photos/silhouette-photography-of-human-hand-raising-963uzyQwa6s",
            "download": "https://unsplash.com/photos/963uzyQwa6s/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA",
            "download_location": "https://api.unsplash.com/photos/963uzyQwa6s/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw0fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA"
          },
          "likes": 316,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "spirituality": {
              "status": "approved",
              "approved_on": "2020-04-06T14:20:22Z"
            }
          },
          "user": {
            "id": "TtAjFndJBZQ",
            "updated_at": "2023-09-13T03:25:15Z",
            "username": "caftos",
            "name": "Caftos",
            "first_name": "Caftos",
            "last_name": null,
            "twitter_username": "_caftos",
            "portfolio_url": "https://www.instagram.com/caftos",
            "bio": "A simple person who likes to take photo.",
            "location": "Brasília - Federal District",
            "links": {
              "self": "https://api.unsplash.com/users/caftos",
              "html": "https://unsplash.com/@caftos",
              "photos": "https://api.unsplash.com/users/caftos/photos",
              "likes": "https://api.unsplash.com/users/caftos/likes",
              "portfolio": "https://api.unsplash.com/users/caftos/portfolio",
              "following": "https://api.unsplash.com/users/caftos/following",
              "followers": "https://api.unsplash.com/users/caftos/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1538354759326-7be45d286088?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1538354759326-7be45d286088?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1538354759326-7be45d286088?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "caftos",
            "total_collections": 0,
            "total_likes": 47,
            "total_photos": 26,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "caftos",
              "portfolio_url": "https://www.instagram.com/caftos",
              "twitter_username": "_caftos",
              "paypal_email": null
            }
          },
          "tags": [
            {
              "type": "search",
              "title": "crowd"
            },
            {
              "type": "search",
              "title": "employment"
            },
            {
              "type": "search",
              "title": "vacancies vacancy"
            }
          ]
        },
        {
          "id": "-El76nrcRNw",
          "slug": "a-close-up-of-a-cell-with-a-lot-of-green-stuff-in-it--El76nrcRNw",
          "created_at": "2021-09-16T20:52:00Z",
          "updated_at": "2023-10-18T15:21:43Z",
          "promoted_at": null,
          "width": 4848,
          "height": 4064,
          "color": "#400c0c",
          "blur_hash": "LCDu355B0R-+J9X6w_we8+%HP5Vw",
          "description": "Coxiella burnetii - bacteria causing Q fever",
          "alt_description": "a close up of a cell with a lot of green stuff in it",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1631824682181-dbe19cf64dab?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1631824682181-dbe19cf64dab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=85",
            "regular": "https://images.unsplash.com/photo-1631824682181-dbe19cf64dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1631824682181-dbe19cf64dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=400",
            "thumb": "https://images.unsplash.com/photo-1631824682181-dbe19cf64dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=200",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1631824682181-dbe19cf64dab"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/-El76nrcRNw",
            "html": "https://unsplash.com/photos/-El76nrcRNw",
            "download": "https://unsplash.com/photos/-El76nrcRNw/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA",
            "download_location": "https://api.unsplash.com/photos/-El76nrcRNw/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHw1fHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE2OTc3MjI0Njd8MA"
          },
          "likes": 28,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {},
          "user": {
            "id": "rhwVsgWJ27M",
            "updated_at": "2023-10-19T06:29:30Z",
            "username": "cdc",
            "name": "CDC",
            "first_name": "CDC",
            "last_name": null,
            "twitter_username": null,
            "portfolio_url": "https://phil.cdc.gov/",
            "bio": "The Public Health Image Library from the Centers for Disease Control and Prevention (CDC) offers an organized, universal electronic gateway to useful and important public health imagery.",
            "location": "USA",
            "links": {
              "self": "https://api.unsplash.com/users/cdc",
              "html": "https://unsplash.com/@cdc",
              "photos": "https://api.unsplash.com/users/cdc/photos",
              "likes": "https://api.unsplash.com/users/cdc/likes",
              "portfolio": "https://api.unsplash.com/users/cdc/portfolio",
              "following": "https://api.unsplash.com/users/cdc/following",
              "followers": "https://api.unsplash.com/users/cdc/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1574341635267-a67096a2de26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1574341635267-a67096a2de26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1574341635267-a67096a2de26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 345,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://phil.cdc.gov/",
              "twitter_username": null,
              "paypal_email": null
            }
          },
          "tags": [
            {
              "type": "search",
              "title": "microscopic"
            },
            {
              "type": "search",
              "title": "infectious disease"
            },
            {
              "type": "search",
              "title": "microbiology"
            }
          ]
        }
      ]
    });
  const API_KEY = process.env.REACT_APP_API_KEY
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("dark");
  const [query, setQuery] = useState("general");
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(218 245 255)';
      document.getElementById('main').style.backgroundColor = 'rgb(218 245 255)'
      document.getElementById('navbar').style.backgroundColor = 'rgb(107 187 217)'
      document.getElementById('banner').style.backgroundColor = 'rgb(173 222 240)'
      document.getElementById('banner').style.color = 'black'
      // rgb(12, 12, 12)
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(52, 52, 52)';
      document.getElementById('main').style.backgroundColor = 'rgb(52, 52, 52)'
      document.getElementById('banner').style.backgroundColor = 'rgb(12, 12, 12)'
      document.getElementById('banner').style.color = 'white'
    }
  }
  useEffect(() => {
    toggleMode();
  }, []);
  useEffect(() => {
    fetchData();
  }, [query])
  const fetchData = async () => {
    setLoading(true);
    // const response =  await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=80&query=${query}&client_id=${API_KEY}`)
    // const newItem = await response.json();
    // // console.log(newItem);
    // setItems(newItem);
    setLoading(false);
  }
  const handleSearch = (q) => {
    setQuery(q);
  }
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} handleSearch={handleSearch} />
      <Banner handleSearch={handleSearch} mode={mode} />
      {loading ? <Spinner mode={mode} /> : ""}
      <Main items={items} mode={mode} />
      <Footer />
    </div>
  );
}

export default App;

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "A list of refereed articles, conference proceedings, and books, ordered by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Active and recent research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Invited colloquia, contributed talks, posters, and upcoming travel.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught and lab demonstrations led at Saint Mary&#39;s University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "An overview of my background, publications, talks and service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-new-paper-out-in-apj-effects-of-environment-on-the-size-evolution-of-quiescent-galaxies-quiescent-galaxies-are-smaller-in-cluster-cores-than-in-the-field-especially-in-the-rest-frame-uv-let-me-know-what-you-think",
          title: 'New paper out in ApJ! Effects of Environment on the Size Evolution of...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-ph-d-at-saint-mary-s-university-the-thesis-two-rest-frame-wavelength-analysis-of-galaxy-size-evolution-in-the-field-and-cluster-environments-was-awarded-the-durland-family-chancellor-s-doctoral-convocation-award-mortar-board",
          title: 'Successfully defended my Ph.D. at Saint Mary’s University! The thesis, Two rest-frame wavelength...',
          description: "",
          section: "News",},{id: "news-joined-asiaa-in-taipei-as-a-postdoctoral-fellow-excited-to-be-working-on-galaxy-quenching-imf-variations-and-the-star-forming-main-sequence-with-kilogas-jwst-subaru-pfs-and-illustristng-rocket",
          title: 'Joined ASIAA in Taipei as a postdoctoral fellow! Excited to be working on...',
          description: "",
          section: "News",},{id: "news-excited-to-be-giving-an-invited-colloquium-at-the-indian-institute-of-astrophysics-in-bengaluru-on-feb-10-with-follow-up-colloquia-at-nthu-hsinchu-mar-6-and-ncu-taoyuan-apr-10-looking-forward-to-the-conversations",
          title: 'Excited to be giving an invited colloquium at the Indian Institute of Astrophysics...',
          description: "",
          section: "News",},{id: "news-wrapping-up-a-full-spring-2026-colloquium-tour-iia-bengaluru-feb-10-nthu-hsinchu-mar-6-and-ncu-taoyuan-apr-10-thanks-to-the-hosts-and-audiences-for-the-discussions-tada",
          title: 'Wrapping up a full Spring 2026 colloquium tour: IIA Bengaluru (Feb 10), NTHU...',
          description: "",
          section: "News",},{id: "news-may-june-travel-aprim-2026-hong-kong-may-4-8-asroc-2026-hsinchu-may-15-17-kilogas-workshop-victoria-bc-may-25-29-saint-mary-s-university-halifax-jun-1-5-casca-2026-montreal-june-8-12-get-in-touch-if-our-paths-cross-airplane",
          title: 'May-June travel: APRIM 2026 (Hong Kong, May 4-8) → ASROC 2026 (Hsinchu, May...',
          description: "",
          section: "News",},{id: "news-mentoring-brian-sng-durham-and-cheng-te-chung-nthu-this-summer-as-part-of-the-asiaa-summer-student-program-2026-projects-on-galaxy-size-evolution-in-simulations-and-the-radial-view-of-star-formation-in-cosmological-simulations-welcome-aboard-seedling",
          title: 'Mentoring Brian Sng (Durham) and Cheng-Te Chung (NTHU) this summer as part of...',
          description: "",
          section: "News",},{id: "projects-galaxy-size-evolution-with-clauds-hsc",
          title: 'Galaxy size evolution with CLAUDS + HSC',
          description: "Two-wavelength structural analysis of galaxies in COSMOS since z ~ 1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-environment-amp-galaxy-size-growth",
          title: 'Environment &amp;amp; galaxy size growth',
          description: "Comparing quiescent galaxies in clusters vs. the field at two rest-frame wavelengths.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-bulge-disk-morphology-in-uv-vs-optical",
          title: 'Bulge+Disk morphology in UV vs. optical',
          description: "Distinct growth tracks for star-forming and quiescent galaxies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-galaxy-quenching-with-kilogas",
          title: 'Galaxy quenching with KILOGAS',
          description: "Resolved spectroscopy of star-formation shutdown in nearby galaxies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-star-forming-main-sequence-in-illustristng",
          title: 'Star-forming main sequence in IllustrisTNG',
          description: "Origin of star formation main sequence in TNG Universe using symbolic regression.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-stellar-imf-variations-with-jwst-subaru-pfs",
          title: 'Stellar IMF variations with JWST + Subaru PFS',
          description: "Spectro-photometric constraints on the IMF slopes across galaxies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-hidden",
          title: 'hidden',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-hidden",
          title: 'hidden',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-hidden",
          title: 'hidden',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_George_Angelo.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%67%65%6F%72%67%65@%61%73%69%61%61.%73%69%6E%69%63%61.%65%64%75.%74%77", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-2742-7702", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oTFgeTAAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/angelogeorge", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/angelo-george", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

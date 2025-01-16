const companies = [
  {
    id: 1,
    name: 'Company One',
    description: 'Innovative solutions for modern businesses',
    image: '/Branding/buytr/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'United States',
    logicPoints: [
      { 
        title: 'Strategic Vision', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log1.png'
      },
      { 
        title: 'Market Analysis', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log2.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log3.png'
      },
      { 
        title: 'Growth Strategy', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log4.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }
    ],
    brandingImages: [
      '/Branding/buytr/m1.png',
      '/Branding/buytr/m2.png',
      '/Branding/buytr/m3.png',
      '/Branding/buytr/m4.png'
    ],
    logoImage: '/Branding/buytr/logo.png'
  },
  {
    id: 2,
    name: 'Company Two',
    description: 'Innovative solutions for modern businesses',
    image: '/Branding/buytr/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'United States',
    logicPoints: [
      { 
        title: 'Strategic Vision', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log1.png'
      },
      { 
        title: 'Market Analysis', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log2.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log3.png'
      },
      { 
        title: 'Growth Strategy', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log4.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }
    ],
    brandingImages: [
      '/Branding/future/m1.png',
      '/Branding/future/m2.png',
      '/Branding/future/m3.png',
      '/Branding/future/m4.png',
      '/Branding/future/m5.png',
      '/Branding/future/m6.png',
      '/Branding/future/m7.png',
      '/Branding/future/m8.png'
    ],
    logoImage: '/Branding/buytr/logo.png'
  },
  {
    id: 3,
    name: 'Company Three',
    description: 'Innovative solutions for modern businesses',
    image: '/Branding/buytr/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'United States',
    logicPoints: [
      { 
        title: 'Strategic Vision', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log1.png'
      },
      { 
        title: 'Market Analysis', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log2.png'
      },
      { 
        title: 'Innovation Focus', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log3.png'
      },
      { 
        title: 'Growth Strategy', 
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        image: '/Branding/buytr/log4.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }
    ],
    brandingImages: [
      '/Branding/urbanstars/m1.png',
      '/Branding/urbanstars/m2.png',
      '/Branding/urbanstars/m3.png',
      '/Branding/urbanstars/m4.png',
      '/Branding/urbanstars/m5.png',
      '/Branding/urbanstars/m6.png',
      '/Branding/urbanstars/m7.png',
      '/Branding/urbanstars/m8.png'
    ],
    logoImage: '/Branding/buytr/logo.png'
  },
  {
    id: 4,
    name: 'Greychem',
    description: 'Building Feature',
    image: '/Branding/greychem/logo.png',
    brandingUrl: '/branding/company-one',
    websiteUrl: 'https://company-one.com',
    brandingOverview: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    problemStatement: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    location: 'India',
    logicPoints: [
      { 
        title: 'Buildings', 
        description: 'The depiction of buildings represents the construction aspect, showcasing the core focus of the brand on construction-related solutions.',
        image: '/Branding/greychem/log2.png'
      },
      { 
        title: 'Falcon wings', 
        description: 'The falcon wings symbolize strength, conveying a sense of power, resilience, and capability. This aligns with the idea of sturdy and well-constructed buildings.',
        image: '/Branding/greychem/log1.png'
      },
      { 
        title: 'Nest', 
        description: 'The inclusion of a nest brings in the aspect of trust. It signifies a safe and secure environment, reflecting the brands commitment toreliability and trustworthiness in the construction industry.',
        image: '/Branding/greychem/log3.png'
      },
      { 
        title: 'Flask & Bubbles', 
        description: 'These elements represent the chemical aspect, indicating an innovative approach to construction. This could imply the use of advanced materials and techniques for more eﬀective and eﬃcient building processes.',
        image: '/Branding/greychem/log4.png'
      },
      { 
        title: 'Round Shape', 
        description: 'The round shape signifies a holistic approach to construction, strength, trust, and chemical elements. It encapsulates the idea of comprehensive and integrated solutions.',
        image: '/Branding/greychem/log5.png'
      },
      { 
        title: 'Grey,Blue & Black colour Palette', 
        description: 'Gray symbolizes strength and stability in construction, blue represents trust and knowledge in chemical solutions, and black adds professionalism and precision through outlines.',
        image: '/Branding/greychem/log6.png'
      },
      { 
        title: 'Letter G & Letter C', 
        description: "Incorporated from the logo title, the stylized combination of the letters 'G' and 'C' forms a central element. This fusion not only represents the initials of GreyChem but also signifies the integration of the brand's values and expertise.",
        image: '/Branding/greychem/log7.png'
      },
      { 
        title: 'Greychem', 
        description: "Bilding featue to the next",
        image: '/Branding/greychem/log8.png'
      }
    ],
    testimonials: [
      { author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit .' }
    ],
    brandingImages: [
      '/Branding/greychem/m1.png',
      '/Branding/greychem/m2.png',
      '/Branding/greychem/m3.png',
      '/Branding/greychem/m4.png',
      '/Branding/greychem/m5.png',
      '/Branding/greychem/m6.png',
      '/Branding/greychem/m7.png',
      '/Branding/greychem/m8.png'
    ],
    logoImage: '/Branding/greychem/logo.png'
  }
];

export default companiesData;
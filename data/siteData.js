const { validateHeaderName } = require("http")

const siteData = [
    {
 
      aboutText: "Societas Arcana is an exclusive club offering unmatched access to security and intelligence experts. Our members get personalised services, confidential consultations, and invitations to exclusive events, ensuring their peace of mind. With a global expert network, we provide bespoke security solutions tailored to each member’s needs. Join us for exceptional protection and discretion.",
      section: 'about',
      aboutImage: 'https://i.ibb.co/yfdy6CL/DSCF9914-e-01.png',
      aboutHoverImage: 'https://i.ibb.co/6mQ6GmP/headshot-Png.png'
    },
    {

      section: 'hero',
      typewriter: [
        'Join an exclusive community',
        'Global intelligence network',
        '24/7 Priority response',
        'Private investigation services',
        'Secure your peace of mind',
        'Trusted security experts', 
        'Protecting what matters',
        'Trusted by industry leaders',
        'Comprehensive security solutions',
        'Exclusive members only community ',
        'Personalised protection plans',
        'Worldwide security experts',
        'Access to intelligence professionals',
        'Global security services'
    
    ],
      title: 'Societas Arcana',
      heroImage: '/logo.png'
    },
    {
 
      section: 'benefits',
      benefits: [
        {
          title: "test",
          description:"description",
          header: "",
          className: "col-span-1",
          icon: ""
        }
      ]

    },
    {

      section: 'skills',
      
    },
    {
  
      section: 'projects',
   
    },
    {
   
      section: 'header',
      linkedin: 'https://www.linkedin.com/company/societas-arcana',
     
    }
  ]

  module.exports = siteData
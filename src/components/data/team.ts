export interface TeamInterface {
    name: string
    role: string
    description: string
    image: string
    linkedin: string
    insta: string
    experience: string
    tags : string[]
    icon: string
}

export const team: TeamInterface[] = [
{
    name:"Alex Johnson",
    role:"UI/UX Designer",
    image:"/our-team/1.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon2.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"9+",
    tags:["User-Centric Design", "Wireframing","Prototyping","Collaboration","User Research","Interaction Design","Visual Design",],
},{
    name:"Emily Rodriguez",
    role:"Frontend Developer",
    image:"/our-team/3.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon1.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"7+",
    tags:["Frontend Development", "Frameworks", "Version Control Systems", "SEO Basics","Collaboration & Communication"],
},
{
    name:"Sophia Brown",
    role:"Shopify Expert",
    image:"/our-team/2.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon4.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"10+",
    tags:["Theme Development", "App Integration","Store Setup", "Cofiguration","Performance Optimization","Responsive Design",],
},
{
    name:"Liam Anderson",
    role:"Digital Marketing & Seo Expert",
    image:"/our-team/4.svg",
    description:"Tristique lacus magna platea turpis viverra urna posuere porttitor. Ipsum proin in tortor lacus id semper. Aliquet blandit nulla porta commodo ultrices dui in. At lectus in gravida ultricies lacus. Pharetra tellus proin ultricies ac.",
    icon:"/our-team/icon3.svg",
    linkedin:"https://www.linkedin.com/",
    insta:"https://www.instagram.com/",
    experience:"8+",
    tags:["Keyword Research", "Content Marketing", "Link Building", "Technical SEO", "Social Media Marketing", "Conversion Rate Optimization"],
}
]
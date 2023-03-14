/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shawkh's Portfolio",
  description:
    "A passionate individual with experience in software development, education and telecommunication industries in various roles",
  og: {
    title: "Shawkh Ibne Rashid Portfolio",
    type: "website",
    url: "https://ShawkhIbneRashid.github.io",
  },
};

//Home Page
const greeting = {
  title: "Shawkh Ibne Rashid",
  logo_name: "ShawkhIbneRashid",
  nickname: "shawkh",
  subTitle:
  //A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact
    "A passionate individual with experience in software development, education and telecommunication industries in various roles.",
  connect_me: "Contact me",

  githubProfile: "https://github.com/ShawkhIbneRashid",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/ShawkhIbneRashid",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shawkh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@shawkhibnerashid",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:si.rashid13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Medium",
    link: "https://medium.com/@shawkh9007",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "Twitter",
    link: "https://twitter.com/Shawkh_Rashid",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
];

const skills = {
  data: [
  
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
	
  degrees: [
    {
      title: "Ontario Tech University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "uoit.png",
      alt_name: "UOIT",
      duration: "2020 - 2022",
	  location: "Oshawa, Ontario, Canada",
      descriptions: [
        "⚡ I took various courses, including Computer Vision, Machine Learning, and Image Processing.",
        "⚡ I did my thesis on a Computer Vision problem titled, \"Single Magnetic Resonance Image Super-resolution using Generative Adversarial Network.\" The thesis is available here https://ir.library.ontariotechu.ca/handle/10155/1500",
        "⚡ I was awarded the Dean’s Graduate Scholarship, awareded to a limited number of master's and doctoral students.",
      ],
      website_link: "https://ontariotechu.ca/",
    },
    {
      title: "Rajshahi University of Engineering and Technology",
      subtitle: "Bachelor of Science in Computer Science and Engineering",
      logo_path: "RUET_logo.png",
      alt_name: "RUET",
      duration: "2021 - 2023",
	  location: "Rajshahi, Bangladesh",
      descriptions: [
        "⚡ I studied subjects, such as Object Oriented Programming, Data Structures, Algorithms, Database Management, Operating Systems, Compilers and Computer Networking",
        "⚡ In the final year, I completed my thesis with the title \Traffic Sign Recognition by Integrating Convolutional Neural Network and Support Vector Machine.\"",
        "⚡ I was engaged in extracurricular activities, including arranging and participating in cultural programs. I was also a member of RUET debating club.",
      ],
      website_link: "https://www.ruet.ac.bd/",
    },
  ],
};

const certifications = {
  certifications: [
	 {
       title: "CANDEV Data Challenge Top 10 Team Certificate",
       subtitle: "- Statistics Canada",
       logo_path: "candev.png",
       certificate_link:
         "https://drive.google.com/file/d/1EqfKnMmbyaheCbf1RozZ3S-75H0a2FQV/view?usp=sharing",
       alt_name: "CANDEV",
       color_code: "#2A73CC",
     },
	 {
      title: "Problem Solving (Basic) Certificate",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/1c42da2c2b6f",
      alt_name: "HackerRank",
      color_code: "#4285F499",
    },
	  {
      title: "Reviewer Certificate Elsevier",
      subtitle: "- Neurocomputing",
      logo_path: "elsevier.png",
      certificate_link:
        "https://drive.google.com/file/d/1LP3AAsXeZFynRXlvVrmweigPoQwwZsvm/view",
      alt_name: "Elsevier",
      color_code: "#FFBB0099",
    },
	 {
      title: "AWS Certified Cloud Practisioner",
      subtitle: "-  Stéphane Maarek",
      logo_path: "Udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b91c8e76-1d0a-49b6-bf96-26fbd59e258f/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
	
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LB8N5U4LS5PB",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7CMNQC7MSYAW",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NZC5SB2D6NDR",
      alt_name: "deeplearning.ai",
      color_code: "#0C9D5899",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/SUFLGM66N5ZX",
      alt_name: "deeplearning.ai",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "- Christopher Brooks",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NERNSL6R329G",
      alt_name: "University of Michigan",
      color_code: "#D83B0199",
    },
    {
      title: "Applied Social Network Analysis in Python",
      subtitle: "- Daniel Romero",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NL59X3V5RBNT",
      alt_name: "University of Michigan",
      color_code: "#1F70C199",
    },
    
    {
      title: "Power BI Essential Training",
      subtitle: "- Gini Von Courter",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/5546507f94b48da76e1c51516c5336ff4c574d66af3191bd6a45b043c0dbaa25",
      alt_name: "PowerBI",
      color_code: "#00000099",
    },
  ],
};



// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
     experience: [
        {
          title: "Junior Machine Learning Engineer",
          subtitle: "Omdena",
          website_link: "https://omdena.com/",
          logo_path: "omdena.png",
          duration: "September 2022 - Present",
          location: "Palo Alto, California, United States",
          descriptions: [
        "⚡ Collaborate on developing a machine learning-based web application using Python (Scikit-learn, NumPy, Pandas), HTML, CSS and JavaScript to notify the patients about their risk levels during pregnancy",
        "⚡ Lead the feature engineering task and implement algorithms, including PCA, Random Forest and LDA",
        "⚡ Build REST APIs with Flask library and assist with technical documentation",
		"⚡ Deploy and modify the web application on AWS cloud using Elastic Beanstalk",
      ],
        },
        {
          title: "Teaching Assistant",
          subtitle: "Ontario Tech University",
          website_link: "https://ontariotechu.ca/",
          logo_path: "uoit.png",
          duration: "January 2021 - Present",
          location: "Oshawa, Ontario, Canada",
          descriptions: [
        "⚡ Conduct labs of 20 to 25 students on subjects, including Data Analysis, Algorithms and Data Structures",
        "⚡ Test and debug programming assignments in Java and C++ and provide feedback to the students ",
        
      ],
        },
        {
          title: "Graduate Research Assistant",
          subtitle: "Ontario Tech University",
          website_link: "https://ontariotechu.ca/",
          logo_path: "uoit.png",
          duration: "January 2021 - August 2022",
          location: "Oshawa, Ontario, Canada",
          descriptions: [
        "⚡ Worked with various computer vision problems, including object detection, classification and segmentation by training and testing deep learning models using Keras, TensorFlow and PyTorch frameworks",
        "⚡ Wrote and pushed code repositories to GitHub and performed version control using Git",
        "⚡ Generated missing 2D slices from 3D magnetic resonance images (MRI) by utilizing 3D GAN models",
		"⚡ Enhanced the resolution of cardiac and brain MRI by optimizing unsupervised models from multiple large datasets",
		"⚡ Published and presented papers related to the regression problem in the computer vision domain at conferences, including MCCSIS and ImNO",
		"⚡ Conducted literature review to learn about the recent CNN and RNN models, and presented the findings",
      ],
        },
	   {
          title: "Executive",
          subtitle: "Teletalk Bangladesh Limited",
          website_link: "https://www.teletalk.com.bd/en/",
          logo_path: "teletalk.png",
          duration: "February 2020 - December 2020",
          location: "Dhaka, Bangladesh",
          descriptions: [
        "⚡ Generated revenue reports by fetching data from the Oracle database by writing custom SQL scripts",
        "⚡ Visualized user data as graphs and diagrams to gain important insights using Tableau",
        "⚡ Wrote Python codes using the Pandas library to process CSV files by cleaning and transforming the user data",
		"⚡ Applied clustering algorithms to identify the most popular packages among the users, which helped Teletalk to design new products for the customers",
		"⚡ Collaborated with other departments to troubleshoot customers’ network issues by using a CRM software",
		
      ],
        },
		
      ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have used various recent tools and frameworks throughout my projects. These projects are written using languages, including Java, C++, Python, JavaScript, CSS and HTML. You can find the details about my projects from my ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have published and presented a few research papers in the machine learning, medical imaging and autonomous vehicle domains.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "Single MR Image Super-Resolution using Generative Adversarial Network",
      createdAt: "2022-07-16T16:26:54Z",
      description: "Paper written on resolution enhancement in magnetic resonance images",
      url:
        "https://arxiv.org/abs/2207.08036",
    },
    {
      id: "",
      name: "Traffic Sign Recognition by Integrating Convolutional Neural Network and Support Vector Machine",
      createdAt: "2019-07-11T16:26:54Z",
      description: "Paper written on multiclass image classification",
      url:
        "https://ieeexplore.ieee.org/abstract/document/9036651",
    },
    {
      id: "",
      name: "Algorithm for Ethical Decision Making at Times of Accidents for Autonomous Vehicles",
      createdAt: "2018-09-13T16:26:54Z",
      description: "Paper written on weight-based accident classification in Autonomous Vehicles",
      url:
        "https://ieeexplore.ieee.org/abstract/document/8628155",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  
  
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

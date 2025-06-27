// // Skills Section Logo's
// import htmlLogo from './assets/tech_logo/html.png';
// import cssLogo from './assets/tech_logo/css.png';
// import javascriptLogo from './assets/tech_logo/javascript.png';
// import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
// import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
// import mysqlLogo from './assets/tech_logo/mysql.png';
// import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
// import gitLogo from './assets/tech_logo/git.png';
// import githubLogo from './assets/tech_logo/github.png';
// import vscodeLogo from './assets/tech_logo/vscode.png';
// import postmanLogo from './assets/tech_logo/postman.png';
// import figmaLogo from './assets/tech_logo/figma.png';
import AWS1Logo from './assets/tech_logo/AWS1.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.jpg';
import agcLogo from './assets/company_logo/agcLogo.jpg';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
//import glaLogo from './assets/education_logo/gla_logo.png';
//import bsaLogo from './assets/education_logo/bsa_logo.jpg';
import vpsLogo from './assets/education_logo/vps_logo.jpg';
import glaLogo from './assets/education_logo/gla_logo.png';
import logocolor1 from './assets/education_logo/logo-color-1.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.jpg';
import csprepLogo from './assets/work_logo/cs_prep.jpg';
import movierecLogo from './assets/work_logo/movie_rec.jpeg';
import autorepair from './assets/work_logo/auto-repair.png'
import taskremLogo from './assets/work_logo/e-waste.jpg';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpencv,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs, FaPython, FaHtml5, FaAws, FaGit, FaGithub, FaFigma } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandCpp, TbCircleLetterC } from "react-icons/tb";
import { RiReactjsLine, RiAngularjsFill, RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { SiMysql, SiMongodb, SiPostman, SiJavascript, SiTypescript } from "react-icons/si";

export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: TbCircleLetterC },
      { name: 'C++', logo: TbBrandCpp },
      { name: 'Python', logo: FaPython },
      { name: 'JavaScript', logo: SiJavascript },
      { name: 'TypeScript', logo: SiTypescript },

    ],
  },
  {
    title: 'AIML Library & Frameworks',
    skills: [
      { name: 'NumPy', logo: SiNumpy },
      { name: 'Pandas', logo: SiPandas },
      { name: 'Scikit-learn', logo: SiScikitlearn },
      { name: 'TensorFlow', logo: SiTensorflow },
      { name: 'PyTorch', logo: SiPytorch },
      { name: 'Keras', logo: SiKeras },
      { name: 'OpenCV', logo: SiOpencv },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: FaHtml5 },
      { name: 'CSS', logo: IoLogoCss3 },
      { name: 'JavaScript', logo: SiJavascript },
      { name: 'React JS', logo: RiReactjsLine },
      { name: 'Angular', logo: RiAngularjsFill },
      { name: 'Tailwind CSS', logo: RiTailwindCssFill },
      { name: 'Bootstrap', logo: BsBootstrapFill },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: FaNodeJs },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: SiMysql },
      { name: 'MongoDB', logo: SiMongodb },
      { name: 'AWS', logo: FaAws },
      { name: 'Firebase', logo: RiFirebaseFill },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: FaGit },
      { name: 'GitHub', logo: FaGithub },
      { name: 'VS Code', logo: VscVscode },
      { name: 'Postman', logo: SiPostman },
      { name: 'Figma', logo: FaFigma },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Full Stack Developer",
    company: "Meta Craftlab Private Limited",
    date: "June 2024 - July 2024",
    desc: " • Built and improved web applications using React.js with a clean and user-friendly design... • Created user-friendly websites using React.js, HTML, CSS, and JavaScript & built server-side features using Node.js.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Tailwind CSS",
      "MongoDb",
    ],
    offerLetter: "/certificates/Meta offer letter.pdf",
    certificate: "/certificates/Meta internship certificate.pdf"
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Bluestock Fintech",
    date: "June 2025 - July 2025",
    desc: "Contributed to IPO Web Application projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
    offerLetter: "/certificates/Bluestock Fintech Offer Letter.pdf",
    certificate: "/certificates/Bluestock Fintech Offer Letter.pdf"
  },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];



export const certificates = [
  {
    id: 1,
    title: "HackgenX – National Level AI-ML Hackathon",
    skills: ["React.js", "Flask", "MongoDB", "CNN", "Nodejs", "ExpressJs"],
    file: "/certificates/Monali_Hackgenx_certificate.pdf", // ← add this to /public
  },
  {
    id: 2,
    title: "NPTEL – Introduction to Industry 4.0 & IIoT",
    skills: ["Embedded Systems", "Cloud Services"],
    file: "/certificates/Introduction to Internet of Things_Certificate_NPTEL.pdf", // ← add this to /public
  },
  {
    id: 3,
    title: "NPTEL – Deep Learning for Natural Language Processing",
    skills: ["Python", "Deep Learning", "LLM", "RNN", "Transformers"],
    file: "/certificates/NPTEL_ML.pdf", // ← add this to /public
  },
  {
    id: 4,
    title: "Data Structures & Algorithms (DSA) Training",
    skills: ["DSA", "Time Complexity", "Sorting", "Searching"],
    details: ["30 hours live training program by ExcelR for Campus Placements"],
    file: "/certificates/EXCELR-97709-Monali Damodhar Babde.pdf",
  },
  {
    id: 5,
    title: "Google For Developers",
    skills: ["Data Analysis", "Machine Learning", "TensorFlow"],
    file: "/certificates/Monali Damodhar Babde 994481_Cohort 9.pdf", // ← add this to /public
  },

  {
    id: 6,
    title: "Data Analytics Process Automation Virtual Internship",
    skills: ["Data Analytics", "Python", "Machine Learning", "Data Structures & Algorithms"],
    file: "/certificates/Monali Damodhar Babde 301635_Cohort 10.pdf", // ← add this to /public
  },
  {
    id: 7,
    title: "Cybersecurity Virtual Internship",
    skills: ["Cloud Computing", "Network Security", "Ethical Hacking"],
    // details: [
    //   "Hands-on exposure to cybersecurity fundamentals including threat detection and incident response.",
    //   "Completed real-world labs using Palo Alto Networks platform.",
    // ],
    file: "/certificates/Monali Damodhar Babde 2651511_Cohort_11.pdf", // ← add this to /public
  },
];




export const education = [
  // {
  //   id: 0,
  //   img: glaLogo,
  //   school: "GLA University, Mathura",
  //   date: "Sept 2022 - July 2024",
  //   grade: "7.81 CGPA",
  //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  //   degree: "Master of Computer Applications - MCA",
  // },
  {
    id: 1,
    img: logocolor1,
    school: "MIT Academy of Engineering, Pune",
    date: "Aug 2022 - June 2026",
    CGPA: "9.14/10",
    desc: "I completed my Bachelor's degree in Electronics Engineering from  MIT Academy of Engineering College, Pune. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MITAOE College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Electronics & Telecommunication)",
    marksheet: "/certificates/Marksheet 2 year .pdf"
  },
  {
    id: 2,
    img: vpsLogo,
    school: " Saraswat Jr. College, Saoner ",
    date: "June 2021 - March 2022",
    grade: "86%",
    desc: "I completed my class 12 education from  Saraswat Jr. College, Saoner under the MSBSHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
    marksheet: "/certificates/12 marksheet .pdf"
  },
  {
    id: 3,
    img: glaLogo,
    school: "VK John Public School, Saoner",
    date: "March 2020",
    grade: "82",
    desc: "I completed my class 10 education from K John Public School, Saoner, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
    marksheet: "/certificates/10 marksheet[1].pdf"
  },
];

export const projects = [
  {
    id: 0,
    title: " Resume Builder",
    description:
      "• In this project I built a resume builder website that helps user to create there resume easily. \n • User can select template of there choice, fill the information and will generate the resume and download also.\n • Tools : HTML, CSS, JavaScript, React.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "SQL"],
    github: "https://github.com/monalibabde/Log-Book-Generator",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Student Performance Factor",
    description:
      " • In this project we first trained our model on the datasets of student marks.  • Apply machine learning algorithms to predict his future percentage based on past data. • Deploy model using Flask.  • Tools & Algorithms : Linear Regression, Render",
    image: csprepLogo,
    tags: ["Machine Learning ", "Data Science", "Google Colab", "Render"],
    github: "https://github.com/monalibabde/ci-model",
    webapp: "https://ci-model-examscore.onrender.com/",
  },
  {
    id: 2,
    title: " Log Book Generator",
    description:
      " • In this Project, I created a UI/UX design for Log book generator in Netbeans. • Here, user can add his entries and save it and that entries are stored in file with timestamps. • Then user can able to retrieve his log entry based on specific dates or keywords. • Tools: Java Swing, MySQL",
    image: movierecLogo,
    tags: ["Java Swing", "JavaNetBeans", "MySQL"],
    github: "https://github.com/monalibabde/Log-Book-Generator",


  },
  {
    id: 3,
    title: "AUTO-REPAIR SYSTEM FOR DAMAGED IMAGES",
    description:
      "• It is an Etherwise Industry Project. • Developed an automated system to restore corrupted or low-quality images using Generative Adversarial Networks. • Trained and fine-tuned GAN models using TensorFlow and PyTorch. • Deployed the system using Flask for real-time web-based interaction.",
    image: autorepair,
    tags: ["Python", "Deep Learning", "Tensorflow", "Pytorch", "Streamlit", "OpenCV"],
    colab: "https://colab.research.google.com/drive/1P47W-rERt0jjlWx9PL-Q04787nljwVdN",
  },

  {
    id: 4,
    title: "Smart E-Waste Classifier",
    description:
      "Built sustainable e-waste management system using AI & MERN Stack",
    image: taskremLogo,
    tags: ["MobileNetV2", "MERN Stack", "Computer Vision", "Geo API"],
    colab: "https://colab.research.google.com/drive/1OIpFVmSvf9jV1WtH67BlKgWR5BbGde_A?usp=sharing",
    //webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];  
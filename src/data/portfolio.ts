// ===== Edit everything about the site here =====
export const config = {
  name: 'Naman Singh',
  email: 'ns2549477@gmail.com',
  phone: '9911988102',
  location: 'Greater Noida, India',
  github: 'https://github.com/naman8102',
  // TODO: verify and replace with your real LinkedIn URL
  linkedin: 'https://www.linkedin.com/in/namans07/',
  resume: '/NamanSinghResumeAIML.pdf',
  // TODO: set VITE_FORM_ENDPOINT in .env (e.g. a Formspree URL) to enable the contact form
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
  photo: '/images/namanImage.jpeg'
}
export const nav = ['Home','About','Skills','Projects','Experience','Achievements','Contact']
export const skills: Record<string,string[]> = {
  'Programming & AI/ML': ['Python','Machine Learning','Deep Learning','TensorFlow','Statistics','Data Structures'],
  'Data & Analytics': ['SQL','Exploratory Data Analysis','Data Visualization','Streamlit','Power BI','Tableau'],
  'Libraries & Tools': ['NumPy','Pandas','Scikit-learn','Matplotlib','Seaborn','Git / GitHub'],
}
export interface Project { title:string; short:string; desc:string; tech:string[]; github?:string; demo?:string; status?:string; hue:string }
export const projects: Project[] = [
  { title:'Fraudulent Transaction Detection', short:'ML · Streamlit', hue:'#c6ff3d',
    desc:'Developed a machine learning system to identify fraudulent financial transactions using transaction type, amount, balance features, and behavioral patterns. Built a machine learning model and deployed an interactive application using Streamlit.',
    tech:['Python','Pandas','Scikit-learn','Random Forest','SMOTE','Streamlit'], github:'https://github.com/naman8102/Fraudulent-Transaction-Detection',
    demo:'https://fraudulent-transaction-detection-2umymvvy844rsetlfpavwd.streamlit.app/'  },
  { title:'EDA — Pokémon Dataset', short:'Data Analysis', hue:'#8b5cf6',
    desc:'Performed exploratory data analysis on the Pokémon dataset to uncover patterns, correlations, statistics, and trends through data visualization.',
    tech:['Python','Pandas','NumPy','Matplotlib','Seaborn'],
    demo:'https://www.kaggle.com/code/naman7singh/pokemon-eda' },
  { title:'Netflix Analytics Dashboard', short:'Tableau', hue:'#ff5d73',
    desc:'Designed an interactive Tableau dashboard to analyze Netflix content data and communicate insights through data visualization and storytelling.',
    tech:['Tableau','Data Visualization','Data Analytics'],
    demo:'https://public.tableau.com/app/profile/naman.singh3692/viz/netflix_visualization/netflix_visualization' },
  { title:'WBAR — Write-Back Aware Shared LLC Management', short:'Research · Ongoing', hue:'#38bdf8', status:'Ongoing academic / research project',
    desc:'An academic research and implementation project based on the paper "Write-back Aware Shared Last-level Cache Management". Exploring intelligent cache management strategies with a focus on write-back behavior and shared last-level cache optimization.',
    tech:['Computer Architecture','Cache Management','Research'] },
]
export const experience = [
  { role:'AI/ML Virtual Intern', org:'AICTE & EduSkills — Supported by Google for Developers', date:'June 2026 – August 2026',
    points:['Completed an 8-week virtual internship focused on AI/ML fundamentals, model building, and cloud integration.','Achieved an Outstanding (O) grade.','Gained practical exposure to applying AI/ML techniques in real-world application scenarios.'] },
  { role:'Data Analyst Intern', org:'Sarvagya Institute, New Delhi', date:'June 2024 – August 2024',
    points:['Cleaned and transformed institutional data using SQL and Python.','Built a Power BI dashboard to improve data visibility.','Conducted data cleaning, transformation, and exploratory analysis to identify trends.'] },
]
export const achievements = [
  'Deloitte Data Analytics Job Simulation Certification',
  'Appreciation Award & Letter of Appreciation — Secretary, ALFA Coding Club',
  'Token of Appreciation for delivering a Value-Added Course on AI to juniors',
  'Programming in Python — 93%',
  'Outstanding (O) grade — AICTE & EduSkills AI/ML Virtual Internship',
  'Python Certification — Coursera (University of Michigan)',
]
export const leadership = ['Machine Learning','Data Analysis','Generative AI','Artificial Intelligence']

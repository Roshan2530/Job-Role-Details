import React from 'react'
import Card from './components/card.jsx'
function App() {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://static.vecteezy.com/system/resources/previews/037/136/968/non_2x/google-search-icon-eps-free-vector.jpg",
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    posted: "1 day ago",
    title: "Software Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Apple",
    logo: "https://logodix.com/logo/1206168.png",
    posted: "3 days ago",
    title: "Product Designer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Bangalore, India"
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    posted: "4 days ago",
    title: "React Developer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Mumbai, India"
  },
  {
    id: 6,
    company: "Netflix",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg",
    posted: "6 days ago",
    title: "UX Researcher",
    type: "Part Time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Delhi, India"
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://i.pinimg.com/736x/f6/0f/b8/f60fb8452db6165d7771316043be598d.jpg",
    posted: "2 days ago",
    title: "UI Designer",
    type: "Full Time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Pune, India"
  },
  {
    id: 8,
    company: "Spotify",
    logo: "https://static.vecteezy.com/system/resources/previews/006/642/199/original/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector.jpg",
    posted: "1 week ago",
    title: "Product Manager",
    type: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Bangalore, India"
  },
  {
    id: 9,
    company: "Flipkart",
    logo: "https://th.bing.com/th/id/OIP.OQrbMsmN86RrB-hXq7AfSQHaHY?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    posted: "3 days ago",
    title: "Backend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 10,
    company: "TCS",
    logo: "https://brandlogos.net/wp-content/uploads/2022/04/tata_consultancy_services-logo-brandlogos.net_.png",
    posted: "5 days ago",
    title: "Data Analyst",
    type: "Part Time",
    level: "Junior Level",
    salary: "$75/hr",
    location: "Chennai, India"
  }
];
  return (
    <div className='parent'>

     {jobs.map((e) => (
  <Card
    key={e.id}
    company={e.company}
    logo={e.logo}
    posted={e.posted}
    title={e.title}
    type={e.type}
    level={e.level}
    salary={e.salary}
    location={e.location}
  />
))}
       
    </div>
  )
}

export default App
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv_nethuli_liyanaarachchi.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript,  BiLogoJava } from "react-icons/bi";
import { BsGit, BsPuzzle } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";


//import images
import EstateApp from '../assets/images/EstateApp.png';
import TicketCLI from '../assets/images/TicketCLI.png';
import GUI from '../assets/images/GUI.png';
import plane from '../assets/images/plane.png';
import carcare from '../assets/images/carcare.png';
import logo from '../assets/images/logo.png';
import webapp from '../assets/images/webapp.png';


// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'Java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'MySql',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Spring  Boot',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'PHP',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	{
		name: 'Car Care ++ | React.js , Nest.js',
		link: 'https://www.carcareplusplus.lk/',
		github: 'https://github.com/Pavith19/CarCare-Project.git',
		description: 'A comprehensive vehicle management application that helps car owners monitor and maintain their vehicles proactively. The app integrates OBD-II diagnostics to provide real-time vehicle health insights, offers service booking for scheduled maintenance, enables dashboard sign identification to help users understand their vehicle’s warning signs, and provides a secure digital document storage system for essential car-related paperwork. Designed for efficiency and ease of use, this app simplifies vehicle management for users, ensuring optimal performance and timely servicing.',
		image: carcare
	},
	{
		name:'Real Time Ticketing System | React.js , Spring Boot',
		github: 'https://github.com/NethuliDulansa/Real-Time-Ticketing-System-Spring-Boot-and-React.git',
		description: "This project is a real-time event ticketing system designed to handle concurrent ticket releases and purchases using multi-threading and synchronization techniques. The system ensures data integrity while managing multiple ticket vendors (producers) and customers (consumers) in a dynamic ticketing environment. It focuses on efficient resource management, preventing race conditions, and handling concurrent transactions smoothly.",
		image: GUI
	},
	{
		name: 'Ticket Management System | Java',
		github: 'https://github.com/NethuliDulansa/-Ticket-Management-System-CLI-Java-.git',
		description: 'A command-line-based ticketing system designed to simulate real-time ticket releases and purchases. The system follows the Producer-Consumer Pattern, where multiple vendors (producers) release tickets while multiple customers (consumers) attempt to purchase them. Using multi-threading and synchronized access, the system prevents data corruption and ensures smooth operations. This implementation focuses on efficiency, concurrency control, and seamless transaction handling without a graphical user interface.',
		image: TicketCLI
	},
	{
		name: 'Real Estate App | React.js',
		github: 'https://github.com/NethuliDulansa/Estate-App-React.git',
		description: 'A feature-rich real estate web application that allows users to search for properties based on various filters, such as property type, price, number of bedrooms, date added, and location (postcode). The application provides an interactive and responsive user interface for displaying property listings, saving favorites, and viewing detailed property information, including images, descriptions, and location maps. It also includes drag-and-drop functionality for managing favorite properties and ensures cross-device compatibility through responsive design techniques.',
		image: EstateApp
	},
	{
		name: ' Plane Seat Reservation System | Java',
		github: 'https://github.com/NethuliDulansa/Plane-Management-System.git',
		description: 'This Java-based project is designed for a private airline company to manage and track seat reservations efficiently. The system includes functionality for seat booking, cancellation, searching for available seats, displaying seating arrangements, and managing customer details. Additionally, the project stores sold ticket details and allows ticket searches based on seat numbers. The system ensures a structured and object-oriented approach with predefined classes for handling seat assignments, pricing, and passenger information.',
		image: plane
	},
	{
		name: 'Nature Nurterers| HTML ,CSS ,JavaScript ',
		link: '',
		github: 'https://github.com/Pavith19/CarCare-Project.git',
		description: 'A group-based website focused on Life on Land, one of the UN Sustainable Development Goals (SDGs). It raises awareness about environmental sustainability with interactive features like a gallery, feedback form, user profiles, and a simulated e-commerce shop. Each team member contributed to different sections, ensuring a cohesive design and functionality',
		image: webapp
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
				<img src={logo} alt="Logo" width="50px" />
					<h5>nethuli dulansa</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Nethuli Liyanaarachchi</h1>
					<p>A passionate Computer Science undergraduate and intern with a strong interest in Software Engineering and Frontend Development. 
						Eager to learn, build, and create impactful digital experiences</p>
					<a
						href={cv}
						download="cv_nethuli_liyanaarachchi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/NethuliDulansa/NethuliDulansa' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/nethuli-liyanaarachchi-2702b2293/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:nethuli.202221140@iit.ac.lk?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
							I am an enthusiastic <span>Computer Science undergraduate and Intern,</span> passionate about <span> Software Engineering </span> 
							and <span> Frontend Development</span>. I enjoy building interactive and user-friendly applications that solve real-world problems. 
							I am always eager to learn new technologies and improve my skills.<br></br> </p>
 
							
							<br></br><p>
							I am currently open to work and looking for opportunities where I can contribute, grow, and collaborate 
							with like-minded professionals. Feel free to check out my projects in the portfolio section to see some of my work.
						    If you have an exciting opportunity, don’t hesitate to reach out! 🚀
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											 {/* Show Live Demo button only if the project has a live link */}
											 {project.link && (
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											 )}
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Nethuli Dulansa</h3>
							<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/NethuliDulansa/NethuliDulansa' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/nethuli-liyanaarachchi-2702b2293/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:nethuli.202221140@iit.ac.lk?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Nethuli Dulansa</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
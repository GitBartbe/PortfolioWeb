import React from 'react';
import './aboutMeCard.css'
import myPhoto from '../../img/my-photo.png'
import aboutText from "./aboutDescription";
import PdfIcon from "../../img/file-pdf-solid.svg"
import CustomButton from '../custom_button/CustomButton';

function AboutMeCard() {
  return (
    <div className="about-card-container">
		<div className='card-left'> 
	<span className="pro">Front End Developer</span>
	<img className="round" src={myPhoto} alt="user" />
    <div className='about-content' >
	<h3>Bartosz Bednarski</h3>
	<h6>Wrocław</h6>
	<p>User interface designer and <br/> front-end developer</p>
    </div>
	<div className="buttons">
		<CustomButton  buttonClass={'primary ghost'}>Sen message</CustomButton>
	</div>
	<div className="skills">
		<h6>Skills</h6>
		<ul>
			<li>UI / UX</li>
			<li>Front End Development</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li>
		</ul>
	</div>
	</div>
	<div className='my-description'><p>{aboutText}</p>
	<div className='pdf-container' >
		<p>Dowload my CV</p>
	<img id="pdf-ico" src={PdfIcon} />
	</div>
	
	</div>
</div>
  );
}

export default AboutMeCard;

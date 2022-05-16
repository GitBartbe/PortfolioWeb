import {useState, useEffect} from "react";
import "./project-component.css";
import CustomButton from "../custom_button/CustomButton";
import DESCRIPTION_DATA from "./data"

const ProjectComponent = (props) => {

  // style= {{backgroundImage: `url(${props.backgroundImage})`}}
  const [description, setDescription] = useState([])

  const data = DESCRIPTION_DATA;



 useEffect(() => {
  data.map((element) => {
    if(element.title === props.title) {
       setDescription(element);
    }
  } )
 } )

const { functionality, link } = description;
console.log(link)

  return (
    <div className="project-container"  > 
      <div className="project-description-container">
        <div className="project-description">
          <div className="app-description">
            <h1>{description.title}</h1>
            <ul>
           {
             functionality && functionality.map((item) => (
               <li>{item}</li>
             ) )
           }
              
            </ul>
          </div>
          <form className="app-button" action={link}>
            <CustomButton buttonClass={"primary"}>Get Code</CustomButton>
          </form>
        </div>
        <div className="project-preview-container">
          <div className="desktop-preview" >
          <img src={props.imageUrl}  alt="" />
          </div>
          <div className="mobile-preview" >
          <img src={props.imageUrlMobile} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectComponent;


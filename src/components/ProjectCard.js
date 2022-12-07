import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, deploy }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='url' />
        <a href={deploy} style={{color: 'white'}} className="lol"> 
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div> 
        </a>
      </div> 
    </Col>
  )
}
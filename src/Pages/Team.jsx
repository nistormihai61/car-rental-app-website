import Footer from "../components/Footer";

import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";


import "../styles/team.scss"

function Team() {
  const teamData = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  
  ];
  return (
    <>
      <div className="team_section">
    
        
          <div className="team_container">

            {teamData.map((props) => (
              <div className="team_container__card">
                <div className="team_container__box__profile">
                  <img src={props.img} alt="" />
                </div>
                <div className="team_descr">
                  <h3>{props.name}</h3>
                  <p>{props.job}</p>
                </div>
              </div>
            ))}
          </div>
      
 
      </div>
        <Footer />
     
    </>
  );
}

export default Team;

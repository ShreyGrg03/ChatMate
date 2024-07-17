
import {Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div 
        style={{
          width: "100",
          padding: 20,
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}>
          <p style={{
            fontSize: "30px", textAlign: "center" 
          }}>
            
             <span>
              <Link 
                style={{ color: "white"}}
                className="nav-link"
                 to={'#'}
                 ></Link>
              </span> 
          </p>

      </div>
    </footer>
  );
};

export default Footer

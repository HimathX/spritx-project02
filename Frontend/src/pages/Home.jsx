import "../styles/Home.css";
import background from '../assets/ground.png';

const Home = () => {
    return (
        <div className="home-container"
        style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>

            <div className="overlay"></div> {/* Dark overlay */}
            <div className="content">
                <h1>Make Your Dream Team</h1>
                <p>
                    Join the ultimate university cricket manager game and show off your strategic skills!
                </p>
            </div>
        </div>
    );
};

export default Home;
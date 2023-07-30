import bg from '../pictures/Madarasah.jpg'
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
    <section className="section-one">
      <div className="container">
      <img className="landing-img" src={bg} />
      <h1 className="welcome">Welcome to Markaz Al-Najah</h1>
      <p className="welcome_bot">Lorem ipsum dolor sit amet, consect, sed do eiusmodlaboris nisi ut aute irure dolor in reprehenderit in vollsuptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button href='/register' id="welcome_btn" variant="contained" size='large'>Sign Up</Button>
      </div>
    </section>
    </>
  );
};

export default Home;

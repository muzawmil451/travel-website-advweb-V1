
import './Home.css';  // Assume you have a CSS file for Home

const Home = () => {
    return (
        <div>
            <header className='header'>
                <div className="header-content">
                    <h1 className='lg-heading text-light main-heading'>Travel the world</h1>
                    <p className='text-light'>Travel the world, experience the greatness, it's the best gift given by nature</p>
                    <button className='btn btn-primary text-red md-heading'>Explore Places</button>
                </div>
            </header>
            {/* Add more sections as in your index.html */}
        </div>
    );
};

export default Home;

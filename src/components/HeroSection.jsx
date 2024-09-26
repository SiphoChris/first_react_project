function HeroSection() {
    return (
      <section className="hero-section">
        <div className="hero-bg-video">
          <video
            src="https://siphochris.github.io/images/images/DroneZone/hero-video.mp4"
            loop
            autoPlay
            muted
            playsInline
          />
        </div>
        <div className="hero-text">
          <h1>Elevate Your Perspective with Cutting-Edge Drones</h1>
          <h3>
            Shop Now and Unleash Your <span>Creativity</span>.
          </h3>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  
// TODO: Remove overlay when scrolling to a certain level on mobile devices

const AboutImage = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content custom-transition">
        <div className="about-image custom-transition"></div>
        <div className="overlay"></div>
        <div className="inside-border"></div>
      </div>
    </div>
  );
};

export default AboutImage;

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-icon">❤️</div>
        <span>HealthFit <b>AI</b></span>
      </div>

      <div className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#meal">Meal Plan</a>
        <a href="#workout">Workout</a>
        <a href="#assistant">AI Assistant</a>
      </div>

      <a href="#assistant" className="nav-button">
        Ask AI
      </a>

    </nav>
  );
}

export default Navbar;
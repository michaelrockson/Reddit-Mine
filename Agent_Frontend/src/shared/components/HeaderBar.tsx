export default function HeaderBar() {
  return (
    <header className="li-border-b li-navbar">
      <div className="li-container">
        <div className="li-nav li-justify-between">
          <h3>Dashboard</h3>
          <div className="li-flex li-justify-between">
            <input className="li-input" type="text" placeholder="Search here" />
          </div>
        </div>
      </div>
    </header>
  );
}

import NavBar from "../shared/components/NavBar.tsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";

export default function WorkSpaceLayout() {
  return (
    <>
      <NavBar />
      <section className="li-section li-grid li-grid-dashboard">
        <div className="li-container">
          <h1>Sidebar</h1>
        </div>
        <DashboardPage />
      </section>
    </>
  );
}

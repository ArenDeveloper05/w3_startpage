import "./App.css";
import { navConfig } from "./config";

function App() {
  console.log(navConfig);
  return (
    <>
      <header>
        <nav>
          <ul>
            {navConfig &&
              navConfig.map(({ id, title, link, isActive }) => {
                return (
                  <li className={isActive ? "active" : ""}>
                    <a href={link}>{title}</a>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
      <main>
        <section className="start-page">
          <div className="start-page-content">
            <h1>START PAGE</h1>
            <p>Template by w3.css</p>
            <button>Get Started</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

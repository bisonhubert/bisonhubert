import { Outlet, Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <div>
      <img
        style={{ width: "100vw", height: "100vh" }}
        className="coming-soon"
        alt='Animated words that say "coming soon!!!"'
        src="https://images.squarespace-cdn.com/content/v1/6297d113a755547140785401/5b03008c-e2fd-4d17-afc9-0a8478d30c65/Coming+Soon.gif"
      />
    </div>
  );
}

export default UnderConstruction;

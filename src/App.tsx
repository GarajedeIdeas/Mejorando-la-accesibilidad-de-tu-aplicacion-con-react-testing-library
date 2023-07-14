import { Link, Route, Routes } from "react-router-dom";
import {
  AltText,
  Contrast,
  EmptyButtons,
  EmptyLinks,
  Labels,
  Landing,
  Lang,
} from "./pages";
import { Steps } from "./components/Steps";

function App() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <h1 lang="en">Live Coding</h1>
        </Link>
        <Steps />
      </header>
      <main>
        <Routes>
          <Route path="/alt" element={<AltText />} />
          <Route path="/contrast" element={<Contrast />} />
          <Route path="/empty-buttons" element={<EmptyButtons />} />
          <Route path="/empty-links" element={<EmptyLinks />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/lang" element={<Lang />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

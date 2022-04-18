import Header from "./container/Header";
import Navbar from "./container/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </div>
  );
}

export default App;

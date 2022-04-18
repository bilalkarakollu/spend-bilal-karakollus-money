import Header from "./container/Header";
import Navbar from "./container/Navbar";
import { Container } from "@mui/material";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <Header />
        <Products/>
      </Container>
    </div>
  );
}

export default App;

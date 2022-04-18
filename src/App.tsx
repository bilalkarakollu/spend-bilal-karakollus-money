import Header from "./container/Header";
import Navbar from "./container/Navbar";
import { Container } from "@mui/material";
import Products from "./components/Products";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{mb:50}}>
        <Header />
        <Products/>
        <Card/>
      </Container>
    </div>
  );
}

export default App;

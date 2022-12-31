import { Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";


function App() {
  return (
    <div className="App">
     <Nav>
      <Logo to={'/'}>recipef</Logo>
     </Nav>
     <Search />
     <Category />
     <Pages/>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:1.5rem;
  font-weight:600;
`
 const Nav = styled.div`
  padding:4rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size:2rem;
  }

 `
export default App;

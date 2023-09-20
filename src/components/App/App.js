import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { HomeScreen } from "../../screen/Home/HomeScreen";
import { CatalogScreen } from "../../screen/Catalog/CatalogScreen";
import { FavoritesScreen } from "../../screen/Favorites/FavoritesScreen";

import { Container, NavMenu } from "./App.styled";


function App() {
  return (
    <Container>

      <NavMenu>
        <NavLink style={{ textDecoration: 'none' }} to="/" end>
          Home
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/catalog">Catalog</NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/favorites">Favorites</NavLink>
      </NavMenu>

      <Routes >
        <Route path="/" element={<HomeScreen />} />
        <Route path="/catalog" element={<CatalogScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>


    </Container>
  );
}

export default App;

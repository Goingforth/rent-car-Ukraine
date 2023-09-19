import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { HomeScreen } from "../../screen/Home/HomeScreen";
import { CatalogScreen } from "../../screen/Catalog/CatalogScreen";
import { FavoritesScreen } from "../../screen/Favorites/FavoritesScreen";

import { Container } from "./App.styled";


function App() {
  return (
    <Container>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>

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

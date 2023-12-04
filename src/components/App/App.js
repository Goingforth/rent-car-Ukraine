import { Suspense, lazy } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { Container, NavMenu } from "./App.styled";

const HomeScreen = lazy(() => import('../../screen/Home/HomeScreen'));
const CatalogScreen = lazy(() => import('../../screen/Catalog/CatalogScreen'));
const FavoritesScreen = lazy(() => import('../../screen/Favorites/FavoritesScreen'));

function App() {
  return (
    <Container>

      <NavMenu>
        <NavLink className="link" to="/" end>
          Home
        </NavLink>
        <NavLink className="link" to="/catalog">Catalog</NavLink>
        <NavLink className="link" to="/favorites">Favorites</NavLink>
      </NavMenu>

      <Suspense fallback={"Loading....."}>
        <Routes >
          <Route path="/" element={<HomeScreen />} />
          <Route path="catalog" element={<CatalogScreen />} />
          <Route path="favorites" element={<FavoritesScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;

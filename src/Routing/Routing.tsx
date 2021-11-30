import React from "react";
import { Routes, Route } from "react-router-dom";

import routes from "config/routes";
import { Homepage, CharacterDetails, CharactersList, Contact, Favorite, NotFound } from "pages";

const Routing: React.FC = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path={routes.characters.default} element={<CharactersList />}>
      <Route path={routes.characters.detailed} element={<CharacterDetails />} />
    </Route>
    <Route path={routes.contact.default} element={<Contact />} />
    <Route path={routes.favorite.default} element={<Favorite />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;

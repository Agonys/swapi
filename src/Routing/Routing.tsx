import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import routes from "config/routes";
import { Homepage, CharacterDetails, CharactersList, Contact, Favorite, NotFound } from "pages";
import NoData from "../components/NoData/NoData";

const Routing: React.FC = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />

    <Route path={routes.characters.default} element={<CharactersList />} />
    <Route
      path={routes.characters.basic}
      element={<Navigate replace to={`${routes.characters.basic}/1`} />}
    />

    <Route path={routes.favorite.default} element={<Favorite />} />
    <Route
      path={routes.favorite.basic}
      element={<Navigate replace to={`${routes.favorite.basic}/1`} />}
    />

    <Route path={routes.profile.default} element={<CharacterDetails />} />
    <Route path={routes.contact.default} element={<Contact />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;

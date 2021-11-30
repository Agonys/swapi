const routes = {
  favorite: {
    label: "Favorite",
    default: "/favorite",
  },
  characters: {
    label: "Character list",
    default: "/characters",
    detailed: ":characterID",
  },
  contact: {
    label: "Contact",
    default: "/contact",
  },
};

export default routes;

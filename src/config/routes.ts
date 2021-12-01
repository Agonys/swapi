const routes = {
  favorite: {
    label: "Favorite",
    default: "/favorite",
  },
  characters: {
    label: "Characters list",
    basic: "/characters",
    default: "/characters/:pageID",
  },
  profile: {
    basic: "/profile",
    default: "/profile/:characterID",
  },
  contact: {
    label: "Contact",
    default: "/contact",
  },
};

export default routes;

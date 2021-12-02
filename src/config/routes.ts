const routes = {
  favorite: {
    label: "Favorite",
    basic: "/favorite",
    default: "/favorite/:pageID",
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

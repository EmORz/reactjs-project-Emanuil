const getNavigation = (userId) => {
  const links = [
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];
  return links;
};

export default getNavigation;

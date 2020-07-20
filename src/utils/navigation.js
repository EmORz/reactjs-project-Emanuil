const getNavigation = (userId) => {
  const links = [
    {
      title: "Home",
      link: '/'
    },
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

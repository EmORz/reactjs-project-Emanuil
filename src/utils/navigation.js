const getNavigation = (userid) => {
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
    {
      title: 'Profile',
      link: '/profile/:'+userid
    }
  ];
  return links;
};

export default getNavigation;

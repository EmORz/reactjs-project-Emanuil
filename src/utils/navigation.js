const getNavigation = (loggedIn, user) => {
  const authLinks = [
    {
      title: "Home",
      link: '/'
    },
    
    {
      title: 'Profile',
      link: `/profile/${user && user.id}`
    },
    {
      title: "About",
      link: "/about",
    }
    
  ];
  const guestLinks = [
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
      title: "About",
      link: "/about",
    }
    
  ];
  return loggedIn? authLinks:guestLinks;
};

export default getNavigation;

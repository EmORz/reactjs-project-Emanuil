const getNavigation = (loggedIn, user) => {
  const authLinks = [
    {
      title: "Home",
      link: '/'
    },
    
    {
      title: 'Profile',
      link: `/profile/${user && user.id}`
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
    }
    
  ];
  return loggedIn? authLinks:guestLinks;
};

export default getNavigation;

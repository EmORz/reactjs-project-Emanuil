const getNavigation = (loggedIn, user) => {
  const adminLinks = [
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
    ,
    {
      title: "Create Product",
      link: "/create-product",
    }
  ]
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
  if(loggedIn && !user.role.includes('admin')){
    return authLinks
  }if(loggedIn && user.role.includes('admin')){

    return adminLinks
  }else{
    return guestLinks
  }
};

export default getNavigation;

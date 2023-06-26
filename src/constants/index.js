import {
    Overview,
    MyListing,
    Reports,
    Reporters,
    Contractor,
    Calendar,
    Notification,
    Setting,
    Logout
  } from "../assets/images/logos";

 const navigation = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: Overview,
    },
    {
      title: "My Listing",
      href: "/my-listing",
      icon: MyListing,
    },
    {
      title: "Reports",
      href: "/badges",
      icon: Reports,
    },
    {
      title: "Reporters",
      href: "/buttons",
      icon: Reporters,
    },
    {
      title: "Contractors",
      href: "/cards",
      icon: Contractor,
    },
    {
      title: "Calendar",
      href: "/grid",
      icon: Calendar,
    },
  ];

 const userProfile = [
    {
      title: "Notifications",
      href: "#",
      icon: Notification,
    },
    {
      title: "Settings",
      href: "#",
      icon: Setting,
    },
    {
      title: "Log out",
      href: "#",
      icon: Logout,
    }
]   
  
 const user = {
    name: "john Doe",
    role: "Admin"
  }

export  {
    user,
    userProfile,
    navigation
}  
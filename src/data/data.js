import React from "react"

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaCode,
  FaDesktop,
  FaAndroid,
  FaSitemap,
  FaMapMarkerAlt,
} from "react-icons/fa"

export const NavLinks = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
]

export const socialLinks = [
  { id: 0, name: "Facebook", icon: <FaFacebookF />, link: "/" },
  { id: 1, name: "Twitter", icon: <FaTwitter />, link: "/" },
  { id: 2, name: "Instagram", icon: <FaInstagram />, link: "/" },
  { id: 3, name: "Linkedin", icon: <FaLinkedinIn />, link: "/" },
  { id: 4, name: "Pinterest", icon: <FaPinterestP />, link: "/" },
]

export const servicesData = [
  {
    id: 0,
    name: "Web Developer",
    icon: <FaCode />,
    desc: "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
  },
  {
    id: 1,
    name: "Web Design",
    icon: <FaDesktop />,
    desc: "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
  },
  {
    id: 2,
    name: "App Design",
    icon: <FaAndroid />,
    desc: "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
  },
  {
    id: 3,
    name: "SEO",
    icon: <FaSitemap />,
    desc: "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
  },
  {
    id: 4,
    name: "Web Marketing",
    icon: <FaMapMarkerAlt />,
    desc: "I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.",
  },
]

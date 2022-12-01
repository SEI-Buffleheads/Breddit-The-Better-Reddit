import {
  GiPartyPopper,
  GiBalloonDog,
  GiGingerbreadMan,
  GiBread,
} from "react-icons/gi";
import { GoHome } from "react-icons/go";


const feed = [
  {
    index: 0,
    params: '',
    title: "Home",
    icon: <GoHome size={25} className="aside-icon" />
  },
  {
    index: 1,
    params: "/posts/all",
    title: "Popular",
    icon: <GiPartyPopper size={25} className="aside-icon" />
  },
  {
    index: 2,
    params: "/posts/all",
    title: "All",
    icon: <GiBalloonDog size={25} className="aside-icon" />
  },
  {
    index: 3,
    params: "/posts/all",
    title: "Happening",
    icon: <GiBread size={25} className="aside-icon" />
  },
  {
    index: 4,
    params: "/posts/all",
    title: "Communities",
    icon: <GiGingerbreadMan size={25} className="aside-icon" />
  },
]

export default feed
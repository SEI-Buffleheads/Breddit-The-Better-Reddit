import {
  GiBalloonDog,
  GiSlicedBread,
  GiChewedHeart,
} from "react-icons/gi";
import {RiGameLine} from "react-icons/ri";
import {
  MdOutlineSportsFootball,
  MdOutlineFastfood,
} from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";

const categoryOptions = [
  {
    index: 0,
    category: 'games',
    title: "Games",
    icon: <RiGameLine size={25} className="aside-icon" />
  },
  {
    index: 1,
    category: 'sports',
    title: "Sports",
    icon: <MdOutlineSportsFootball size={25} className="aside-icon" />
  },
  {
    index: 2,
    category: 'business',
    title: "Business",
    icon: <TbBusinessplan size={25} className="aside-icon" />
  },
  {
    index: 3,
    category: 'crypto',
    title: "Crypto",
    icon: <GiSlicedBread size={25} className="aside-icon" />

  },
  {
    index: 4,
    category: 'food',
    title: "Food",
    icon: <MdOutlineFastfood size={25} className="aside-icon" />
  },
  {
    index: 5,
    category: 'memes',
    title: "Memes",
    icon: <GiBalloonDog size={25} className="aside-icon" />
  },
  {
    index: 6,
    category: 'entertainment',
    title: "Entertainment",
    icon: <GiChewedHeart size={25} className="aside-icon" />
  }

];

export default categoryOptions

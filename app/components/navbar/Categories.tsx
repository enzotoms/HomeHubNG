'use client'

import { TbBeach, TbPool, TbChefHat, TbWindmill } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiHiking, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaBuilding, FaBowlingBall, FaCity, FaMountain, FaTree } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond, IoFilm, IoTrendingDown } from "react-icons/io5";

export const categories = [
    {
        label: 'Beach', 
        icon: TbBeach,
        description: 'This apartment is close to the beach!'
    },
    {
        label: 'Winmills', 
        icon: GiWindmill,
        description: 'This apartment has a windmill close by!'
    },
    {
        label: 'Modern', 
        icon: MdOutlineVilla,
        description: 'A very modern suites apartment!'
    },
    {
        label: 'Countryside', 
        icon: FaMountain,
        description: 'Experience the countryside of Naija!'
    },
    {
        label: 'Pools', 
        icon: TbPool,
        description: 'This apartment has a pool!'
    },
    {
        label: 'Islands', 
        icon: GiIsland,
        description: 'Get an experience of the Lagos island!'
    },
    {
        label: 'Lake', 
        icon: GiBoatFishing,
        description: 'Experience a life at the lake!'
    },
    {
        label: 'Hiking', 
        icon: GiHiking,
        description: 'The hiking experience from this property!'
    },
    {
        label: 'Mansion', 
        icon: FaBuilding,
        description: 'Feel the Comfort!'
    },
    {
        label: 'Castles', 
        icon: GiCastle,
        description: 'Be a king in the castle home of naija!'
    },
    {
        label: 'Camping', 
        icon: GiForestCamp,
        description: 'Camp in the green woods of naija!'
    },
    {
        label: 'Arctic', 
        icon: BsSnow,
        description: 'Get welcomed by the Northern hamattan!'
    },
    {
        label: 'Cave', 
        icon: GiCaveEntrance,
        description: 'Are you a cave lover!'
    },
    {
        label: 'Desert', 
        icon: GiCactus,
        description: 'Checkout what the deserts hold!'
    },
    {
        label: 'Barns', 
        icon: GiBarn,
        description: 'Apartments closer to barn!'
    },
    {
        label: 'Luxury', 
        icon: IoDiamond,
        description: 'This apartment is luxurious!'
    },
    {
        label: 'Trending', 
        icon: IoTrendingDown,
        description: 'See what is trending!'
    },
    {
        label: "Chef's", 
        icon: TbChefHat,
        description: 'Explore Good food with good chefs!'
    },
    {
        label: 'Parks', 
        icon: FaTree,
        description: 'Explore nature through our parks!'
    },
    {
        label: 'Cities', 
        icon: FaCity,
        description: 'Delve into the top cities!'
    },
    {
        label: 'Games', 
        icon: FaBowlingBall,
        description: 'Feel good gaming!'
    },
    {
        label: 'Cinema', 
        icon: IoFilm,
        description: 'Catch the latest movies on cinema!'
    },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div 
        className="
          pt-4 
          flex 
          flex-row 
          items-center 
          justify-between 
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label} 
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;

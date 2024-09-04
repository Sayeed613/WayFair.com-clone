import Slider from "react-slick";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";

export default function DealOfTheDay() {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
          <button
            onClick={onClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 border-[#7b189f] rounded-full p-2 z-10"
          >
            <IoIosArrowDropleft className="text-[#7b189f]" size={30} />
          </button>
        );
      };

      const NextArrow = (props) => {
        const { onClick } = props;
        return (
          <button
            onClick={onClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 border-[#7b189f] rounded-full p-2 z-10"
          >
            <IoIosArrowDropright className="text-[#7b189f]" size={30} />
          </button>
        );
      };

      const settings = {
        infinite: false,
        speed: 90,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    let data = [
        {
            id:"a1",
            img: "https://assets.wfcdn.com/im/89523963/resize-h400-w400%5Ecompr-r85/2777/277727886/default_name.jpg",
            title: "Mid-Back Mesh Multifunction Executive Swivel Ergonomic Office Chair with Adjustable Arms",
            price: "$117.20",
            dicount_price: "$256.26",
            tag: "Deal of the Day"
        },
        {
            id:  "a2",
            img: "https://assets.wfcdn.com/im/51009757/resize-h400-w400%5Ecompr-r85/2657/265768530/default_name.jpg",
            title: "Audrye 5 - Piece Modular Sectional",
            price: "$739.99",
            dicount_price: "$789.99",
            tag: "Deal of the Day"
        },
        {
            id:  "a3",
            img: "https://assets.wfcdn.com/im/81127136/resize-h400-w400%5Ecompr-r85/2433/243328032/default_name.jpg",
            title: "Adriean Electric Fireplace",
            price: "$202.99",
            dicount_price: "$359.99",
            tag: "Deal of the Day"
        },
        {
            id:  "a4",
            img: "https://assets.wfcdn.com/im/13572644/resize-h400-w400%5Ecompr-r85/2619/261902397/default_name.jpg",
            title: "Bengoa L Shaped Desk with Storage Bag, Computer Desk with Removable Stand, Writing Desk for Home Office",
            price: "$73.99",
            dicount_price: "$89.99",
            tag: "Deal of the Day"
        },
        {
            id:  "a5",
            img: "https://assets.wfcdn.com/im/87453964/resize-h400-w400%5Ecompr-r85/2620/262099863/default_name.jpg",
            title: "Braunstone Faux Leather Power Recliner",
            price: "$1,559.99",
            dicount_price: null,
            tag: "Deal of the Day"
        },
        {
            id:  "a6",
            img: "https://assets.wfcdn.com/im/44393175/resize-h400-w400%5Ecompr-r85/2268/226848501/default_name.jpg",
            title: "Rayniya Suede",
            price: "$136.99",
            dicount_price: "$169.99",
            tag: "Deal of the Day"
        },
        {
            id:  "a7",
            img: "https://assets.wfcdn.com/im/56643622/resize-h400-w400%5Ecompr-r85/2561/256106463/default_name.jpg",
            title: "Arezo L-Shape Executive Desk",
            price: "$570.00",
            dicount_price: "$869.98",
            tag: "Deal of the Day"
        },
        {
            id:  "a8",
            img: "https://assets.wfcdn.com/im/11113209/resize-h400-w400%5Ecompr-r85/2683/268305233/default_name.jpg",
            title: "Andrena Genuine Leather Recliner with Nailhead Trim",
            price: "$719.99",
            dicount_price: "$1,799.00",
            tag: "Deal of the Day"
        },
        {
            id:  "a9",
            img: "https://assets.wfcdn.com/im/73466592/resize-h400-w400%5Ecompr-r85/2539/253970081/default_name.jpg",
            title: "Sholpan 67.8'' W LED Computer Desk with Cabinet, L-Shaped Desk with Power Outlets, Reversible Corner Desk with Drawers and Shelves",
            price: "$135.99",
            dicount_price: "$189.99",
            tag: "Deal of the Day"
        },
        {
            id:  "a10",
            img: "https://assets.wfcdn.com/im/13572644/resize-h400-w400%5Ecompr-r85/2619/261902397/default_name.jpg",
            title: "Latarya 59''W L-Shaped Desk with Steel Storage Shelves, Reversible Computer Desk with Built-in Outlets and LED Strip Lights",
            price: "$136.99",
            dicount_price: "$179.99",
            tag: "Deal of the Day"
        }
    ];

  return  (
    <div className="w-full p-10">
      <p className="text-2xl font-bold ">Deals of the Day</p>

    <Slider {...settings} className="relative w-full mt-2">
      {data.map((product) => (
        <Link  key={product.id}>
          <div className="flex flex-col gap-2 items-center flex-shrink-0 w-64 group">
            <div className="relative border-2 border-gray-200 h-80 w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
                <div className="absolute top-0 left-0 bg-red-900 text-white font-semibold text-[12px] py-1 px-2 z-10 rounded-br-lg">
                  {product.tag}
                </div>
            </div>
            <div className="w-full text-start mt-2 p-3">
              <h2 className="font-semibold text-gray-800 text-sm truncate">{product.title}</h2>
                <div className="flex gap-6 items-center mt-1">
                <p className="font-bold  text-sm text-red-900">{product.price}</p>
                <p className="text-gray-400 text-xs line-through">{product.dicount_price}</p>
                </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  </div>
  )
}

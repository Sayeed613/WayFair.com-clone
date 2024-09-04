import Slider from "react-slick";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SimilarProductsCards() {
  let products = [
    {
      id: "1",
      title: 'GE 30" Free-Standing Electric Range',
      image_url:
        "https://assets.wfcdn.com/im/46141300/resize-h400-w400%5Ecompr-r85/1192/119294032/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 538,
      exact_price: 649,
      discount_percentage: "17% Off",
      rating: 4.5,
      votes: 1726,
      category: "appliance",
    },
    {
      id: "2",
      title: '30" 5 cu ft. Freestanding Gas Range with Griddle',
      image_url:
        "https://assets.wfcdn.com/im/21156370/resize-h400-w400%5Ecompr-r85/2057/205788973/default_name.jpg",
      brand: "By LG",
      discount_price: 734.89,
      exact_price: 934,
      discount_percentage: "21% Off",
      rating: 4,
      votes: 112,
      category: "appliance",
    },
    {
      id: "3",
      title: '30" 5.3 cu. ft. Freestanding Electric Range',
      image_url:
        "https://assets.wfcdn.com/im/06014746/resize-h400-w400%5Ecompr-r85/1159/115901772/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 528,
      exact_price: 649,
      discount_percentage: "19% Off",
      rating: 4.5,
      votes: 1131,
      category: "appliance",
    },
    {
      id: "4",
      title:
        "6.3 cu. ft. Smart Freestanding Electric Range with No-Preheat Air Fry & Convection",
      image_url:
        "https://assets.wfcdn.com/im/48547115/resize-h400-w400%5Ecompr-r85/2505/250592663/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 748,
      exact_price: 1049,
      discount_percentage: "29% Off",
      rating: 4.6,
      votes: 341,
      category: "appliance",
    },
    {
      id: "5",
      title: '30" 5 cu ft. Freestanding Electric Range',
      image_url:
        "https://assets.wfcdn.com/im/68754070/resize-h400-w400%5Ecompr-r85/1159/115901853/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 628,
      exact_price: 799,
      discount_percentage: "21% Off",
      rating: 4.6,
      votes: 123,
      category: "appliance",
    },
    {
      id: "6",
      title:
        'LG 6.3 cu ft. Smart Wi-Fi Enabled Freestanding Electric Range with EasyClean, 30"',
      image_url:
        "https://assets.wfcdn.com/im/28864820/resize-h400-w400%5Ecompr-r85/2377/237747106/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 628,
      exact_price: 749,
      discount_percentage: "16% Off",
      rating: 4.6,
      votes: 644,
      category: "appliance",
    },
    {
      id: "7",
      title: '30" 4.8 cu. ft. Freestanding Gas Range',
      image_url:
        "https://assets.wfcdn.com/im/60066538/resize-h400-w400%5Ecompr-r85/2057/205794293/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 628,
      exact_price: 799,
      discount_percentage: "21% Off",
      rating: 4.7,
      votes: 677,
      category: "appliance",
    },
    {
      id: "8",
      title: 'GE 30" Free-Standing Electric Convection Range',
      image_url:
        "https://assets.wfcdn.com/im/67863330/resize-h400-w400%5Ecompr-r85/2427/242719642/default_name.jpg",
      brand: "By Frigidaire",
      discount_price: 841.38,
      exact_price: 949,
      discount_percentage: "11% Off",
      rating: 4.5,
      votes: 22925,
      category: "appliance",
    },
    {
      id: "9",
      title: 'GE 30" Free-Standing Electric Range',
      image_url:
        "https://assets.wfcdn.com/im/98422439/resize-h400-w400%5Ecompr-r85/2506/250608650/default_name.jpg",
      brand: "By GE Appliances",
      discount_price: 1200,
      exact_price: 1538,
      discount_percentage: "22% Off",
      rating: 4.7,
      votes: 747,
      category: "appliance",
    },
    {
      id: "10",
      title: '30" 4.8 cu.ft. Freestanding Gas Range',
      image_url:
        "https://assets.wfcdn.com/im/41478268/resize-h400-w400%5Ecompr-r85/2381/238191698/default_name.jpg",
      brand: "By Cosmo",
      discount_price: 1200,
      exact_price: 6300,
      discount_percentage: "32% Off",
      rating: 4.7,
      votes: 1262,
      category: "appliance",
    },
    {
      id: "11",
      title: 'Frigidaire 30" 5.3 Range',
      image_url:
        "https://assets.wfcdn.com/im/94402969/resize-h400-w400%5Ecompr-r85/2463/246311041/default_name.jpg",
      brand: "By Cosmo",
      discount_price: 4300,
      exact_price: 6300,
      discount_percentage: "17% Off",
      rating: 4.4,
      votes: 756,
      category: "appliance",
    },
    {
      id: "12",
      title:
        "GE Appliances 3 Piece Kitchen Appliance Package with French Door Refrigerator, Electric Freestanding Range",
      image_url:
        "https://assets.wfcdn.com/im/88231644/resize-h400-w400%5Ecompr-r85/2204/220437894/default_name.jpg",
      brand: "By Cosmo",
      discount_price: 5300,
      exact_price: 7200,
      discount_percentage: "26% Off",
      rating: 4.4,
      votes: 279,
      category: "appliance",
    },
    {
      id: "13",
      title:
        'Cosmo 4 Piece Kitchen Appliance Package with French Door Refrigerator, 30" Gas Freestanding Range',
      image_url:
        "https://assets.wfcdn.com/im/79376928/resize-h400-w400%5Ecompr-r85/2724/272444196/default_name.jpg",
      brand: "By Forno",
      discount_price: 7196,
      exact_price: 9895,
      discount_percentage: "40% Off",
      rating: 4.7,
      votes: 810,
      category: "appliance",
    },
    {
      id: "14",
      title:
        'Cosmo 4 Piece Kitchen Appliance Package with French Door Refrigerator, 30" Electric Freestanding Range',
      image_url:
        "https://assets.wfcdn.com/im/31142022/resize-h400-w400%5Ecompr-r85/9483/94832298/default_name.jpg",
      brand: "By Cosmo",
      discount_price: 4600,
      exact_price: 6300,
      discount_percentage: "27% Off",
      rating: 4.7,
      votes: 378,
      category: "appliance",
    },
    {
      id: "15",
      title: 'Forno 3 Piece 30" Kitchen Bonus Package',
      image_url:
        "https://assets.wfcdn.com/im/96520796/resize-h400-w400%5Ecompr-r85/2648/264825116/default_name.jpg",
      brand: "By Cosmo",
      discount_price: 5000,
      exact_price: 7200,
      discount_percentage: "47% Off",
      rating: 4.5,
      votes: 1028,
      category: "appliance",
    },
  ];
  // Custom Arrow Components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2   border-[#7b189f]  rounded-full p-2  z-10"
      >
        <IoIosArrowDropleft className="text-[#7b189f] " size={30} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2   border-[#7b189f]  rounded-full p-2  z-10"
      >
        <IoIosArrowDropright className="text-[#7b189f] " size={30} />
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

  return (
    <div className="relative py-4">
      <h1 className="text-4xl font-bold text-gray-800 mt-10 p-8">
        Similar Products
      </h1>
      <Slider {...settings} className="relative p-4">
        {products.map((product) => (
          <Link to={`/product/view/${product.id}`} key={product.id}>
            <div className="cards h-[400px] sm:border-2 sm:border-transparent hover:sm:border-black hover:sm:rounded-lg w-[100%] sm:w-[280px] p-2 flex-shrink-0 transition-all duration-300 mx-2">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-auto"
              />
              <h2 className="font-normal text-black truncate">
                {product.title}
              </h2>
              <h4 className="font-normal text-gray-400">{product.brand}</h4>
              <div className="flex gap-2">
                <h1 className="font-bold text-black">
                  ${product.discount_price}
                </h1>
                {product.exact_price && (
                  <p className="text-gray-400 font-semibold line-through">
                    ${product.exact_price}
                  </p>
                )}
                {product.discount_percentage && (
                  <p className="text-red-600">{product.discount_percentage}</p>
                )}
              </div>
              <div className="flex gap-2">
                <p className="mt-2">
                  {Array(Math.round(product.rating)).fill("⭐").join("")} (
                  {product.votes})
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

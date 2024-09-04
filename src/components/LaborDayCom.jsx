export default function LaborDayCom() {
  const data = [
    {
      id: "1",
      image: "https://assets.wfcdn.com/im/35000043/scale-h566-w464%5Ecompr-r85/2959/295965812/default_name.jpg",
      alt: "Labor Day Deal 1",
    },
    {
      id: "2",
      image: "https://assets.wfcdn.com/im/15696565/scale-h566-w464%5Ecompr-r85/2959/295965791/default_name.jpg",
      alt: "Labor Day Deal 2",
    },
    {
      id: "3",
      image: "https://assets.wfcdn.com/im/17525220/scale-h566-w464%5Ecompr-r85/2975/297526708/default_name.jpg",
      alt: "Labor Day Deal 3",
    },
    {
      id: "4",
      image: "https://assets.wfcdn.com/im/90465202/scale-h566-w464%5Ecompr-r85/2959/295965787/default_name.jpg",
      alt: "Labor Day Deal 4",
    },
  ];

  return (
    <div className="w-full  mx-auto py-6 px-4">
      <div className="text-2xl font-bold mb-6 text-start">
        Like summer, these Labor Day deals won’t last.
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-cover rounded-xl hover:border-black hover:border-2 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

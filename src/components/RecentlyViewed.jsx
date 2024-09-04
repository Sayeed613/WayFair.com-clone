export default function RecentlyViewed() {
    const data = [
        { id: 1, image: "https://assets.wfcdn.com/im/26049748/resize-h400-w400%5Ecompr-r85/2566/256637747/default_name.jpg" },
        { id: 2, image: "https://assets.wfcdn.com/im/05547867/resize-h400-w400%5Ecompr-r85/1091/109158628/default_name.jpg", label: "Sale" },
        { id: 3, image: "https://assets.wfcdn.com/im/61042235/resize-h400-w400%5Ecompr-r85/2699/269997790/default_name.jpg", label: "Deal of the Day" },
        { id: 4, image: "https://assets.wfcdn.com/im/21156370/resize-h400-w400%5Ecompr-r85/2057/205788973/default_name.jpg", label: "Labor Day Clearances" },
        { id: 5, image: "https://assets.wfcdn.com/im/58487267/resize-h400-w400%5Ecompr-r85/2755/275585392/default_name.jpg" },
        { id: 6, image: "https://assets.wfcdn.com/im/30941581/resize-h400-w400%5Ecompr-r85/4916/49168066/default_name.jpg", label: "Labor Day Clearances" },
        { id: 7, image: "https://assets.wfcdn.com/im/10797177/resize-h400-w400%5Ecompr-r85/3632/36321502/default_name.jpg", label: "Labor Day Clearances" },
    ];

    return (
        <div className="w-full p-4 sm:p-6 lg:p-10">
            <div className="flex  justify-between items-center mb-4">
                <p className="text-[18px] sm:text-[20px] font-bold">Recently Viewed</p>
                <p className="text-[14px] sm:text-[15px] font-bold underline text-[#7b189f] cursor-pointer">See all</p>
            </div>

            <div className="relative w-full overflow-x-auto">
                <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col gap-2 items-center flex-shrink-0 w-48 sm:w-56 lg:w-64 group">
                            <div className="relative border-2 border-transparent h-64 sm:h-72 lg:h-80 w-full rounded-lg overflow-hidden group-hover:border-[#7b189f] transition duration-300">
                                <img src={item.image} alt="" className="p-2 w-full h-full object-cover rounded-lg" />
                                {item.label && (
                                    <div className="absolute top-0 left-0 bg-red-900 text-white font-semibold text-[10px] sm:text-[12px] py-1 px-2 z-10 rounded-br-lg">
                                        {item.label}
                                    </div>
                                )}
                            </div>
                            <button className="mt-2 px-3 sm:px-4 py-1 sm:py-2 text-[#7b189f] border-2 border-[#7b189f] rounded-full font-semibold group-hover:bg-[#7b189f] group-hover:text-white transition duration-300 text-[12px] sm:text-[14px]">
                                See Similar Items
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

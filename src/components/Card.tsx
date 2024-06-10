import Image from "next/image";

const Card = () => {
  return (
    <section>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-blue-100">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-59 flex flex-col justify-center items-center  rounded-t-xl">
              <Image src="/img-1.png" alt="camp" width={450} height={400} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Innovation
              </h3>
              <p className="mt-3 text-gray-500">
                Availing timely and workable technologies in agriculture
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-59 flex flex-col justify-center items-center  rounded-t-xl">
              <Image src="/img-1.png" alt="camp" width={450} height={400} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Profitability
              </h3>
              <p className="mt-3 text-gray-500">
                Inspiring farmers to engage in profitable agriculture
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="h-59 flex flex-col justify-center items-center rounded-t-xl">
              <Image src="/img-1.png" alt="camp" width={450} height={400} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Livelihood
              </h3>
              <p className="mt-3 text-gray-500">
                Ushering in decent livelihood for farming communities
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </section>
  );
};

export default Card;

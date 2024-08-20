"use client";

function BestSellers() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-20">
        <div className="relative">
          <div className="mx-auto max-w-xl lg:max-w-7xl">
            <div className="mx-auto mb-14 max-w-6xl">
              <h1 className="text-3xl font-bold tracking-wider text-gray-900 uppercase">
                Best Sellers in Cell Phones & Accessories
              </h1>
            </div>
            <div className="my-18 -mx-4 flex flex-wrap px-4">
              <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                <a className="group block w-full" href="/BestSellStore">
                  <img
                    className="mb-5 block w-full rounded-lg"
                    src="https://img.freepik.com/premium-photo/ecommerce-apple-all-products-devices_862994-4599.jpg?size=626&ext=jpg&uid=R156822665&ga=GA1.1.714022349.1721762449&semt=sph"
                    alt=""
                  />
                  <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                    Stay productive with the Apple products you love.
                  </h4>
                  <p className="max-w-xl text-lg text-gray-500 hover:text-blue-500">
                    Save up to 17% on Apple
                  </p>
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <a className="group mb-8 md:flex" href="/BestSellStore">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://img.freepik.com/premium-photo/electronic-devices-balancing-concept_23-2150422326.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Apple iPhone 15 Pro (512 GB) - Black Titanium
                    </h4>
                    <h4 className="text-xl font-semibold text-gray-900">
                      ₹ 1,56,400
                    </h4>
                  </div>
                </a>
                <a className="group mb-8 md:flex" href="/BestSellStore">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://img.freepik.com/premium-photo/black-apple-watch-with-neon-blue-face_843415-1362.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Apple Watch SE (2nd Gen, 2023) [GPS 44mm] Smartwatch
                    </h4>
                    <h4 className="text-xl font-semibold text-gray-900">
                      ₹ 29,999
                    </h4>
                  </div>
                </a>
                <a className="group mb-8 md:flex" href="/BestSellStore">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039320.jpg?size=626&ext=jpg&uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Apple AirPods Pro (2nd Generation) with MagSafe Case
                      (USB‑C)-(White)
                    </h4>
                    <h4 className="text-xl font-semibold text-gray-900">
                      ₹ 22,790
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BestSellers;

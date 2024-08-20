
const products = [
  {
    name: 'Ethnic wear',
    shopNow:'Shop Now',
    description: 'Ethnic wear refers to clothing that is specific to a particular cultural or ethnic group.',
    imageSrc: 'https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502996.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: 'Ethnic wear',
    href: '/CategoryCard',
  },
  {
    name: 'WFH Casual Wear',
    shopNow:'Shop Now',
    description: 'Baggy or loose fitting clothes provide the comfort and freedom to move about in, which is ideal for home office.',
    imageSrc: 'https://img.freepik.com/premium-photo/happy-handsome-man-with-mobile-phone-standing_33839-8388.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: 'WFH Casual Wear.',
    href: '/CategoryCard',
  },
  {
    name: 'Active Wear',
    shopNow:'Shop Now',
    description: 'Activewear is casual and comfortable clothing that is specifically designed for exercise, sports and outdoor pursuits.',
    imageSrc: 'https://img.freepik.com/premium-photo/young-woman-exercising-outside_52137-24323.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: 'Active Wear.',
    href: '/CategoryCard',
  },
  {
    name: 'Active Wear',
    shopNow:'Shop Now',
    description: 'Activewear is casual and comfortable clothing that is specifically designed for exercise, sports and outdoor pursuits.',
    imageSrc: 'https://img.freepik.com/free-photo/resting-sportsman-with-bottle_23-2147757987.jpg?ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: 'Active Wear.',
    href: '/CategoryCard',
  },
  {
    name: 'Western Wear',
    shopNow:'Shop Now',
    description: ' Western shirts with pearl snap fasteners and vaquero design accents, blue jeans, cowboy hat, a leather belt, and cowboy boots.',
    imageSrc: 'https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-checkered-shirt-jeans-clothes-sexy-carefree-woman-posing-near-pink-wall-studio-positive-model-with-no-makeup_158538-3321.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
    imageAlt: 'Western Wear.',
    href: '/CategoryCardTwo',
  },
  {
    name: 'Watches',
    shopNow:'Shop Now',
    description: 'A watch is a portable timepiece that is designed to be worn on the wrist or carried in the pocket.',
    imageSrc: 'https://img.freepik.com/premium-photo/watch-with-black-face-white-face-with-numbers-4-4-face_1249034-2634.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
    imageAlt: 'Watches.',
    href: '/CategoryCardTwo',
  },
  {
    name: 'Beauty & Makeup',
    shopNow:'Shop Now',
    description: 'Beauty & Makeup',
    imageSrc: 'https://img.freepik.com/premium-photo/3d-rendered-photos-make-up-background-with-copy-space-text-colored-background_1096167-97386.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid',
    imageAlt: 'Beauty & Makeup.',
    href: '/CategoryCardTwo',
  },
  {
    name: 'Kids Wear',
    shopNow:'Shop Now',
    imageSrc: 'https://img.freepik.com/premium-photo/cotton-shirts-with-shorts-stylish-baby-clothes-accessories-summer-fashion-kids-outfit_629685-25373.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid',
    imageAlt: 'Kids Wear.',
    href: '/CategoryCardTwo',
  },
    // More products...
]

function ProductList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-wider text-gray-900 uppercase ">Shop By Category</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 px-4">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default ProductList;
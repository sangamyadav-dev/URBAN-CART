const products = [
  {
    id: 1,
    name: 'Black trousers & purple laughs',
    href: '/womenCollectionStore',
    imageSrc: 'https://img.freepik.com/free-photo/full-length-shot-elegant-lady-red-hat-black-purple-outfit-posing-with-hanger-with-elegant-dresses-shoes-packages_197531-17604.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: "Black trousers & purple laughs.",
    price: '₹2189',
    color: 'purple & Black',
  },
  {
    id: 2,
    name: 'Outfit hanger consumer style',
    href: '/womenCollectionStore',
    imageSrc: 'https://img.freepik.com/premium-photo/women-clothes-outfit-hanger-consumer-style-shopping_972478-10977.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: "Outfit hanger consumer style.",
    price: '₹3545',
    color: 'Yellow & Black',
  },
  {
    id: 3,
    name: 'purple sweater and skirt',
    href: '/womenCollectionStore',
    imageSrc: 'https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17493.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: "purple sweater and skirt.",
    price: '₹1899',
    color: 'purple',
  },
  {
    id: 4,
    name: '2 Pcs Suit Set',
    href: '/womenCollectionStore',
    imageSrc: 'https://img.freepik.com/premium-photo/handsome-woman-with-nice-haircut-doesn-t-know-what-wears-today-picture-isolated-white-wall_132075-5039.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
    imageAlt: "2 Pcs Suit Set.",
    price: '₹1244',
    color: 'Black',
  },
  // More products...
]

function WomenCollectionList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 sm:py-24 lg:px-8 lg:max-w-8xl py-16">
        <h2 className="text-3xl font-bold tracking-wider text-gray-900 uppercase">Women Top Collection</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WomenCollectionList;

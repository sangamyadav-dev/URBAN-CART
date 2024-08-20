

const products = [
  {
      id: 1,
      name: 'Nike Air Max 21A',
      href: '/mensCollectionStore',
      imageSrc: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      imageAlt: "Nike Air Max 21A.",
      price: '₹26,199',
      color: 'Green-Yellow',
    },
    {
      id: 2,
      name: 'Male belt sweater accessories clothes',
      href: '/mensCollectionStore',
      imageSrc: 'https://img.freepik.com/free-photo/male-belt-sweater-accessories-clothes_1203-6421.jpg?ga=GA1.2.714022349.1721762449&semt=ais_hybrid',
      imageAlt: "Male belt sweater accessories clothes.",
      price: '₹899',
      color: 'Gray',
    },
    {
      id: 3,
      name: 'sherwani or Kurta Pyjama',
      href: '/mensCollectionStore',
      imageSrc: 'https://img.freepik.com/premium-photo/two-indian-men-wears-ethnic-traditional-cloths-male-fashion-models-with-sherwani-kurta-pyjama-sitting-posing-wing-chair-sofa-against-brown-grunge-background-selective-focus_466689-45468.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
      imageAlt: "sherwani or Kurta Pyjama.",
      price: '₹4154',
      color: 'Green-Yellow',
    },
    {
      id: 4,
      name: 'Formal Shirts & T-shirts',
      href: '/mensCollectionStore',
      imageSrc: 'https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-background_783884-192219.jpg?w=740',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹1480',
      color: 'white Yellow Gray',
    },
];
function MensCollection() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-9xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-3xl font-bold tracking-wider text-gray-900 uppercase">
        Mens Top Collection
      </h2>
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
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default MensCollection
'use client'

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/CardPages',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/CardPages',
    },
    {
      name: 'Cleaning Tools',
      description: 'Make Your Home Clean & Fresh',
      imageSrc: 'https://img.freepik.com/premium-photo/cleaning-tools-illustration-generative-ai_115919-5049.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449',
      imageAlt: 'Cleaning Tools Collection.',
      href: '/CardPages',
    },
  ]
  const calloutss = [
    {
      name: 'Modern living room interior design',
      description: 'Modern Home Design Make Your Beautiful',
      imageSrc: 'https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-24580.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
      imageAlt: 'Modern living room interior design.',
      href: '/CardPages',
    },
    {
      name: 'Make Your Home Beautiful',
      description: 'Living Room Interior Design',
      imageSrc: 'https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-25382.jpg?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_user',
      imageAlt: 'Living Room Interior Design.',
      href: '/CardPages',
    },
    {
      name: 'Shoe rack indoors still life',
      description: ' A shoe rack is a furniture by the door houses, and serves a function to keep shoes organized',
      imageSrc: 'https://img.freepik.com/free-photo/shoe-rack-indoors-still-life_23-2150695667.jpg?ga=GA1.1.714022349.1721762449&semt=ais_hybrid',
      imageAlt: 'Podium with cosmetics bottle and tube Natural cosmetics.',
      href: '/CardPages',
    },
  ]

function Category() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-21">
            <h1 className="text-3xl font-bold tracking-wider text-gray-900 uppercase">Collections</h1>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {calloutss.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
    export default Category;
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <img
                    alt="URBAN CART"
                    src="https://cdn-icons-png.freepik.com/256/6463/6463872.png?uid=R156822665&ga=GA1.1.714022349.1721762449&semt=ais_hybrid"
                    className="h-8 w-auto"
                  />
                </a>
                <span className="flex px-5 items-center cursor-pointer justify-center font-bold text-blue-400">
                  URBAN CART
                </span>
              </div>
            </div>
            <p className="text-1xl font-sans font-semibold ">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex mt-4 space-x-4">
              <FacebookIcon className="w-6 h-6 text-muted-foreground" />
              <InstagramIcon className="w-6 h-6 text-muted-foreground" />
              <TwitterIcon className="w-6 h-6 text-muted-foreground" />
              <GitlabIcon className="w-6 h-6 text-muted-foreground" />
              <YoutubeIcon className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
          <div>
            <h3 className="text-1xl font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-md hover:text-primary"
                  prefetch={false}
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md text-semibold hover:text-primary"
                  prefetch={false}
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-1xl font-semibold ">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-md text-semibold hover:text-primary"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md text-semibold hover:text-primary"
                  prefetch={false}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md text-semibold hover:text-primary"
                  prefetch={false}
                >
                  API Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-1xl font-semibold ">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-md  hover:text-primary"
                  prefetch={false}
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center">
          <p className="text-1xl font-semibold ">
            © 2024 Urban Cart BY - SangamYadav-dev , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

import { Separator } from '@/components/ui/server';

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4 grid justify-items-center lg:justify-items-start gap-x-3 gap-y-10 grid-cols-2 grd-rows-auto">
        <div>
          <h1 className="text-black font-bold text-center lg:text-left pb-2">
            LOS ANGELES
          </h1>

          <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5 text-black">
            <li className="">
              145 Oliveshka Street,
              <span className="block"> Los Angeles, LA 90003</span>
            </li>
            <li>
              <a href="tel:+44 987 065 901">+44 987 065 901</a>
            </li>
            <li>
              <a href="mailto:info@Example.com">info@Example.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black font-bold text-center lg:text-left pb-2">
            SAN FRANCISCO
          </h1>

          <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5 text-black">
            <li>
              210 Pier Street,
              <span className="block">San Francisco, CA 94111</span>
            </li>
            <li>
              <a href="tel:+44 987 065 901">+44 987 065 901</a>
            </li>
            <li>
              <a href="mailto:info@Example.com">info@Example.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black font-bold text-center lg:text-left pb-2">
            NEW YORK
          </h1>

          <ul className="flex flex-col items-start justify-center  lg:justify-start gap-3 lg:gap-5 text-black">
            <li>
              711 Snow Street,{' '}
              <span className="block"> New York, NY 10014</span>
            </li>
            <li>
              <a href="tel:+44 987 065 901">+44 987 065 901</a>
            </li>
            <li>
              <a href="mailto:info@Example.com">info@Example.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-black font-bold text-center lg:text-left pb-2">
            FOLLOW US
          </h1>

          <ul className="grid gap-x-3 lg:gap-x-10 gap-y-2 grid-cols-2 grid-rows-auto text-black">
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="http://www.dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                href="http://www.behance.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="http://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4">footer secondary</section>
    </>
  );
};

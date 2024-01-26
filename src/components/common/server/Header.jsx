import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { AiFillQqCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const jsxLogo = (
  <a title="Home" class="transition-colors hover:text-amber-400" href="/">
    <AiFillQqCircle size={32}></AiFillQqCircle>
  </a>
);

const fb = (
  <a
    title="Home"
    class="transition-colors hover:text-amber-400"
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook size={28}></FaFacebook>
  </a>
);

const insta = (
  <a
    title="Home"
    class="transition-colors hover:text-amber-400"
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram size={28}></FaInstagram>
  </a>
);

const linkedin = (
  <a
    title="Home"
    class="transition-colors hover:text-amber-400"
    href="https://www.linkedin.com/feed/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CiLinkedin size={28}></CiLinkedin>
  </a>
);

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4">
      {jsxLogo}

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex z-10 flex-col items-center">
        <li className="mb-4">{fb}</li>
        <li className="mb-4">{insta}</li>
        <li className="mb-4">{linkedin}</li>
      </ul>
    </div>
  );
};

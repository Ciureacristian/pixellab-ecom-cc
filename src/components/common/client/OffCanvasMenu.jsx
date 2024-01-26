import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10"
      >
        <CgMenu size={32}></CgMenu>
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-neutral-900 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="mb-6">
            <Link
              href="/"
              title="Home"
              className="text-xl font-semibold transition-colors hover:text-amber-400 hover:underline"
            >
              Home
            </Link>
          </li>

          <li className="mb-6">
            <Link
              href="/contact"
              title="Contact"
              className="text-xl font-semibold transition-colors hover:text-amber-400 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

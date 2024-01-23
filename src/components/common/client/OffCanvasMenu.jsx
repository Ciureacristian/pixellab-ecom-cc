import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button title="Menu" type="button">
        <CgMenu size={32}></CgMenu>
      </button>

      <nav className = { `${
        open ? '' : ''
      } bg-neutral-900 text-white w-dvw h-dvh fixed left-0 -top-full z-0`}>
            <ul>
                <li>
                    <Link href="/" title='Home'>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/" title='Home'>
                        Home
                    </Link>
                </li>
            </ul>
      </nav>
    </>
  );
};
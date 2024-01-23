import Link from "next/link";
import { OffCanvasMenu } from "../client";



//Consider jsx is a normal data type
const jsxLogo = <span className="bg-white block w-4 aspect-square rounded-full"></span>

export const Header = () => {

    return <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4">
        {/*forced example */}
        <Link href="/">{jsxLogo}</Link>

     <OffCanvasMenu></OffCanvasMenu>
        <ul className="hidden lg:block">
            <li>{jsxLogo}</li>
            <li></li>
            <li></li>
        </ul>
    </div>;
};
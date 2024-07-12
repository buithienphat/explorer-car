import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center padding-x py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            width={118}
            height={18}
            alt="logo"
            className="object-contain"
          />
        </Link>

        <div>
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyle="bg-white text-primary-blue rounded-full min-w-[130px] max-xl:bg-primary-blue max-xl:text-white"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

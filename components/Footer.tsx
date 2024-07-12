import { footerLinks } from "@/contans";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="">
          <Link href={"/"} className="flex items-center mb-10">
            <Image
              src={"/logo.svg"}
              width={118}
              height={18}
              alt="logo"
              className="object-contain"
            />
          </Link>
          <div>Carhub 2023</div>
          <div>All Rights Reserved ©</div>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, i) => (
            <div key={i} className="footer__link">
              <h3 className=" font-bold mb-5 max-md:mb-2">{link.title}</h3>
              {link.links.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.url}
                    className="hover:text-primary-blue duration-main text-grey"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <div>@2023 CarHub. All rights reserved</div>
        <div className="footer__copyrights-link">
          <Link
            href={"/"}
            className="text-grey hover:text-primary-blue duration-main"
          >
            Privacy & Policy
          </Link>
          <Link
            href={"/"}
            className="text-grey hover:text-primary-blue duration-main"
          >
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

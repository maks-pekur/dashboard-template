import { Button } from "@nextui-org/button";
import Logo from "../logo";

const AsideHead = () => {
  return (
    <div className="flex items-center justify-between px-6 pb-6 max-md:flex-row-reverse">
      <Logo />
      <Button size="sm" variant="light">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default AsideHead;

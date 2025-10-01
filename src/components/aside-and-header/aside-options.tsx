import Link from "next/link";
import { Separator } from "../ui/separator";

const AsideOptions = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-lg p-2 hover:bg-blue-500"
      >
        {children}
      </Link>
      <Separator className="my-1 border-blue-400" />
    </>
  );
};

export default AsideOptions;

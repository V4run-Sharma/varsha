import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-60 py-8 w-full flex justify-between items-start bg-neutral-100 dark:bg-neutral-900 text-center">
      <div className="flex flex-col items-start">
        <Link href={"/about"} className="group">
          <p className="text-3xl font-medium ">About</p>
          <div className="mb-3 w-0 group-hover:w-2/3 h-[3px] transition-all bg-black dark:bg-white"></div>
        </Link>
        <Link href={"/about/privacy-policy"}>
          <p className="mb-1 text-sm hover:underline">Privacy Policy</p>
        </Link>
        <Link href={"/about/terms-and-conditions"}>
          <p className="mb-1 text-sm hover:underline">Terms and Conditions</p>
        </Link>
        <Link href={"/about/shipping-and-delivery"}>
          <p className="mb-1 text-sm hover:underline">Shipping and Delivery</p>
        </Link>
        <Link href={"/about/cancellation-and-refund"}>
          <p className="mb-1 text-sm hover:underline">
            Cancellation and Refund
          </p>
        </Link>
        <p className="mt-3 text-xs">
          &copy; 2024 Varsha Watches&trade;. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-col items-start">
        <Link href={"/stores"} className="group">
          <p className="text-3xl font-medium ">Stores</p>
          <div className="mb-3 w-0 group-hover:w-2/3 h-[3px] transition-all bg-black dark:bg-white"></div>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Delhi</p>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Mumbai</p>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Bangalore</p>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Kolkata</p>
        </Link>
      </div>
      <div className="flex flex-col items-start">
        <Link href={"/contact-us"} className="group">
          <p className="text-3xl font-medium ">Contact Us</p>
          <div className="mb-3 w-0 group-hover:w-2/3 h-[3px] transition-all bg-black dark:bg-white"></div>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Email</p>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Phone</p>
        </Link>
        <Link href={"/"}>
          <p className="mb-1 text-sm hover:underline">Address</p>
        </Link>
      </div>
    </footer>
  );
}

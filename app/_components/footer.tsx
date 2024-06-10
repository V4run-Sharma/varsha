import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-60 py-8 w-full flex justify-between items-center bg-neutral-200 dark:bg-neutral-800 text-center">
      <div className="flex flex-col items-start">
        <Link href={"/about/"}>
          <p className="mb-4 text-3xl font-medium ">About</p>
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
      <div></div>
      <div></div>
    </footer>
  );
}

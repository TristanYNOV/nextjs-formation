import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import CustomHomeIcon from "@/composants/icons/home";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Link href="/">
          <CustomHomeIcon/>
      </Link>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

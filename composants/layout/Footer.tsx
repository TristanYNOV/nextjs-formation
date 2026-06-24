"use client";
import Logo from "../ui/Logo";
import CookiesConsent from "./CookiesConsent";
import {useEffect, useState} from "react";
import {AllDocumentTypes} from "@/prismicio-types";
import {CreateLinkPrismic, GetFooterNavLinks} from "@/libs/prismicClient";

export default function Footer() {
  const [footerPrismic,setFooterPrismic] = useState<AllDocumentTypes | null>(null);

  useEffect(() => {
    async function loadNav() {
      const resp = await GetFooterNavLinks();

      setFooterPrismic(resp)
    }

    loadNav();
  }, [])
  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          {
            footerPrismic && CreateLinkPrismic(footerPrismic)
          }
          <li>
            <CookiesConsent />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

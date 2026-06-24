import {createClient} from "@/prismicio";
import {PrismicNextLink} from "@prismicio/next";
import {AllDocumentTypes} from "@/prismicio-types";

const client = createClient();

export function CreateLinkPrismic(doc: AllDocumentTypes) {
    return doc?.data.nav_links.map(link =>
        <PrismicNextLink field={link} key={link.key}/>)
}

export async function GetHeaderNavLinks() {
    return await client.getByUID("nav_links", "header_links").catch(() => null);
}

export async function GetFooterNavLinks() {
    return await client.getByUID("nav_links", "footer_links").catch(() => null);
}

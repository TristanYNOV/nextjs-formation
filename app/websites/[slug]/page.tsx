import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import {WebsiteType} from "@/types/website";
import {redirect} from "next/navigation";

type WebsitePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getWebsites(): Promise<WebsiteType[]> {
  return await fetch('http://localhost:3000/websites.json').then(res => res.json());
}

export default async function WebsitePage({ params }: WebsitePageProps) {
  const { slug } = await params;
  const websites = await getWebsites();

  const currentWebsite = websites.find(
      (website) => website.slug === slug,
  );

  if (!currentWebsite) {
    redirect("/websites");
  }

  return (
      <main>
        <WebsiteHeader website={currentWebsite} />
      </main>
  );
}
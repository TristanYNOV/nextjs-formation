import Title from "@/composants/ui/Title";
import { WebsiteType } from "@/types/website";
import WebsiteViewList from "@/app/websites/_components/websiteViewList";

export default async function WebsitesPage() {
    const websites: WebsiteType[] = await fetch("http://localhost:3000/websites.json").then(
        (res) => res.json(),
    );

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <WebsiteViewList websites={websites}/>
    </main>
  );
}

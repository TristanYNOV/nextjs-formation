import { WebsiteType } from "@/types/website";
import Image from "next/image";

export default function Website({
  website: { title, thumbnail },
}: {
  website: WebsiteType;
}) {
  return (
    <article>
      <h3>{title}</h3>
      <Image src={`/websites/${thumbnail}`} alt={`thumbnail-${title}`} height={400} width={400} />
    </article>
  );
}

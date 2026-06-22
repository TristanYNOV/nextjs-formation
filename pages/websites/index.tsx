import websites from '@/public/next-files/websites.json';
import Image from "next/image";
import Link from "next/link";

interface BaseWebSite {
    slug: string,
    title: string,
    thumbnail: string,
}

export default function WebsitesPage () {
    const websiteList: BaseWebSite[] = websites.map(site => {
        return {
            slug: site.slug,
            title: site.title,
            thumbnail: site.thumbnail,
        }
    })


    return(
        <>
        <h1>Websites list</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {websiteList.map((website, index) => (
                <Link href={`/websites/${website.slug}`} key={index}>
                    <article key={website.title}>
                        <Image
                            key={`${website.title}-${website.thumbnail}`}
                            src={`/next-files/websites/${website.thumbnail}`}
                            alt={`${website.title} - image ${index + 1}`}
                            width={800}
                            height={500}
                        />
                        <h2>{website.title}</h2>
                    </article>
                </Link>
            ))}
        </div>
    </>
    )
}
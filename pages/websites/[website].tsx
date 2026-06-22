import Image from "next/image";
import {WebsiteMetaData} from "@/types/website";

const websitesUrl = 'http://localhost:3000/next-files/websites.json';

export async function getStaticPaths() {
    const websiteResponse: WebsiteMetaData[] = await fetch('http://localhost:3000/next-files/websites.json').then(res => res.json());
    const allowedPaths = websiteResponse.map((site) => ({
        params: {
            website: site.slug,
        },
    }));

    return {paths: allowedPaths, fallback: 'blocking'};
}

export async function getStaticProps({params}: {params: {website: string}}) {
    const targetedSite = params?.website;

    if (typeof targetedSite !== 'string') {
        return {
            notFound: true,
        };
    }

    const websiteResponse: WebsiteMetaData[] = await fetch(websitesUrl).then(res => res.json());
    const website = websiteResponse.find(site => site.slug === targetedSite);

    if (!website) {
        return {
            redirect: {
                destination: '/websites',
                permanent: false,
            }
        };
    }

    return {
        props: {
            website,
        },
    };
}


export default function WebsitePage({website}: {website: WebsiteMetaData}) {
    return (
        <main>
            <div>
                <h1>{website.title}</h1>

                <p>{website.description}</p>

                <p>
                    URL :{' '}
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {website.url}
                    </a>
                </p>

                <p>Tags : {website.tags.join(', ')}</p>
                <p>Couleurs : {website.colors.join(', ')}</p>
                <p>Scroll : {website.scroll}</p>
                <p>Date : {website.date}</p>
            </div>

            <div>
                <h2>Images</h2>

                <Image
                    key={`${website.title}-${website.thumbnail}`}
                    src={`/next-files/websites/${website.thumbnail}`}
                    alt={`${website.title} - image`}
                    width={800}
                    height={500}
                />

                {website.images.map((image, index) => (
                    <Image
                        key={`${website.title}-${image}`}
                        src={`/next-files/websites/${image}`}
                        alt={`${website.title} - image ${index + 1}`}
                        width={800}
                        height={500}
                    />
                ))}
            </div>
        </main>
    );
}
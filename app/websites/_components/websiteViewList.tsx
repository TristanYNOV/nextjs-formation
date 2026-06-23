"use client";
import {WebsiteType} from "@/types/website";
import Website from "@/composants/ui/Website";
import {Button} from "@/composants/ui/Button";

export default function WebsiteViewList({websites}: {websites: WebsiteType[]}) {
    return (
        <>
            <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
                {websites.map((w, i) => (
                    <Website key={`website-${i}`} website={w}/>
                ))}
        </div>
        <footer className="pt-12 flex justify-center">
            <Button onClick={() => {}}>Charger plus de sites web</Button>
        </footer>
        </>
)
}
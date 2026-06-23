export function Video({src}: {src: string}) {
    return (
        <video className={'h-full w-full'} controls preload="metadata">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
import {Video} from "@/composants/Controller/video";

export default function HomePage() {
  return (
      <>
        <div>HomePage</div>
          <div className={'h-32 w-32'}>
              <Video src={"/highlight.mp4"}/>
          </div>
      </>
        );
}

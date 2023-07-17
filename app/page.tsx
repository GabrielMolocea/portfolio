import { Info } from "./Body/Info";
import Tabs from "./Body/Tabs";

export default function Home() {
  return (<>
    <div className="flex justify-center self-center pt-24">
      <Info />
      <Tabs />

    </div>
  </>
  )
}

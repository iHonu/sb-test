import Image from "next/image";
import Button from "./components/Button";
import { Large } from "@/stories/Button.stories";
import { Tag } from "./ui/components/tags/Tag";

export default function Home() {
  return (
    <main >
      <Button variant='secondary'>Button</Button>
      <Tag label='Development'  />
    </main>
  );
}

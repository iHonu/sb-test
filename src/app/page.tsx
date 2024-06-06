import Button from "./components/Button";
import { Tag } from "./ui/components/tags/Tag";
import { Image } from "./ui/components/Image";

export default function Home() {
  return (
    <main >
      <Button variant='secondary'>Button</Button>
      <Tag label='Development'  />
      <Image src='/image1.png' alt="image1" />
    </main>
  );
}

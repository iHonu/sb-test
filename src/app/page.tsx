import Button from "./components/Button";
import { Tag } from "./ui/components/tags/Tag";
import { Image } from "./ui/components/Image";
import { CardText } from "./ui/components/card/CardText";

export default function Home() {
  return (
    <main >
      <Button variant='secondary'>Button</Button>
      <Tag label='Development'  />
      <Image src='/image1.png' alt="image1" />
      <CardText author='Author' date='Date' title='Title' description='Description' />
    </main>
  );
}

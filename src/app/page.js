import Link from "next/link";
import Categories from "./components/Categories";
import News from "./components/News";

export default function Home() {
  return (
    <main>
      <News topic={"India"}/>
    </main>
  )
}

import SeafoodSite from "@/components/SeafoodSite";
import { dict } from "@/lib/content";

export const metadata = {
  title: dict.en.meta.title,
  description: dict.en.meta.description,
};

export default function Home() {
  return <SeafoodSite lang="en" />;
}

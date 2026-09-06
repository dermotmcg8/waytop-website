import SeafoodSite from "@/components/SeafoodSite";
import { dict } from "@/lib/content";

export const metadata = {
  title: dict.zh.meta.title,
  description: dict.zh.meta.description,
};

export default function HomeZh() {
  return <SeafoodSite lang="zh" />;
}

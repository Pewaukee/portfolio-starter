import { getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import DateFormatter from "../../../components/DateFormatter";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content", "date"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto">
      <main className="m-10">
        <div className="w-full h-auto text-white">
          <p className="text-2xl">{post.title}</p>
          <DateFormatter dateString={post.date} />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}

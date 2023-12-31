// page that is rendered when going to the /blog page
import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container mx-auto px-5 my-6">
      <main>
        <h1 className="text-center text-3xl">All Posts</h1>

        <div className="h-12"></div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
          {posts.map((post) => (
            <div key={post.id}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

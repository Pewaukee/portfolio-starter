import { getPostBySlug } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdownToHtml';
import markdownStyles from './markdown-styles.module.css';
import DateFormatter from '../../../components/DateFormatter';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigLeftDash } from 'lucide-react';

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'author',
    'content',
    'date',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return (
    <div className="container mx-auto">
      <main className="m-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="sticky top-0">
            <Image
              src={post.coverImage}
              alt={`cover image for ${post.title}`}
              width={400}
              height={400}
              style={{ width: '100%' }}
              className="w-auto h-auto"
            />
          </div>

          <div className="w-full h-auto text-white">
            <p className="text-2xl">{post.title}</p>
            <DateFormatter dateString={post.date} />
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
        <Link href="/posts">
          <div className="inline-flex group/back">
            <div className="group-hover/back:-translate-x-1 duration-100">
              <ArrowBigLeftDash />
            </div>
            <h1 className="ml-1">Back to Main</h1>
          </div>
        </Link>
      </main>
    </div>
  );
}

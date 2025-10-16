import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section bg-gradient-to-bl from-secondary-light via-neutral to-accent-light">
          <div className="container max-w-4xl">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-6"
            >
              <ArrowRight size={20} />
              <span>חזרה לבלוג</span>
            </Link>

            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <Tag size={18} className="text-primary" />
              <span 
                className="text-sm font-medium"
                style={{ color: "var(--primary)" }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="heading-1 mb-6">{post.title}</h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('he-IL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="container max-w-4xl -mt-8 mb-12">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Content */}
        <section className="section bg-white">
          <div className="container max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      // Convert markdown-style headers
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-4xl font-heading font-bold mb-6 mt-8">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-3xl font-heading font-bold mb-4 mt-6" style="color: var(--primary)">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-2xl font-heading font-semibold mb-3 mt-4">${line.slice(4)}</h3>`;
                      }
                      // Convert markdown-style bold
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="font-bold text-lg mb-2">${line.slice(2, -2)}</p>`;
                      }
                      // Convert list items
                      if (line.startsWith('- ')) {
                        return `<li class="mb-2">${line.slice(2)}</li>`;
                      }
                      // Convert horizontal rule
                      if (line === '---') {
                        return '<hr class="my-8 border-gray-300" />';
                      }
                      // Regular paragraphs
                      if (line.trim() && !line.startsWith('<')) {
                        return `<p class="mb-4 leading-relaxed text-gray-700">${line}</p>`;
                      }
                      return line;
                    })
                    .join('\n')
                }}
              />
            </article>

            {/* CTA */}
            <div 
              className="mt-12 p-8 rounded-xl text-white text-center"
              style={{ 
                background: `linear-gradient(to bottom right, var(--primary), color-mix(in srgb, var(--primary) 70%, black))`
              }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                רוצים ייעוץ תזונתי אישי?
              </h3>
              <p className="mb-6 opacity-90">
                בואו נבנה יחד תוכנית תזונה מותאמת בדיוק לצרכים שלכם
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-medium transition-all duration-200 bg-white hover:bg-gray-100"
                style={{ color: "var(--primary)" }}
              >
                קבעו פגישה עכשיו
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section bg-neutral">
          <div className="container max-w-4xl">
            <h2 className="heading-2 mb-8 text-center">מאמרים נוספים</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105">
                      {relatedPost.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}

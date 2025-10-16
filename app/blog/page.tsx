import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/content/blog-posts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Calendar, User, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="section bg-gradient-to-bl from-secondary-light via-neutral to-accent-light">
          <div className="container text-center">
            <h1 className="heading-1 mb-4">הבלוג שלי</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              מאמרים, טיפים ומידע מקצועי בתחום התזונה והבריאות
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105">
                    {/* Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag size={16} className="text-primary" />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: "var(--primary)" }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString('he-IL')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="mt-4">
                        <span 
                          className="text-sm font-medium inline-flex items-center gap-2"
                          style={{ color: "var(--primary)" }}
                        >
                          קרא עוד ←
                        </span>
                      </div>
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

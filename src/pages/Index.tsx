import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import blogTechImage from "@/assets/blog-tech.jpg";
import blogDesignImage from "@/assets/blog-design.jpg";
import blogProductivityImage from "@/assets/blog-productivity.jpg";

const Index = () => {
  const blogPosts = [
    {
      title: "Getting Started with Modern Web Development",
      excerpt: "Learn the fundamentals of modern web development with React, TypeScript, and Tailwind CSS. This comprehensive guide covers everything you need to know to build stunning web applications.",
      image: blogTechImage,
      author: "Alex Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Development"
    },
    {
      title: "The Art of Clean Code: Best Practices for Developers",
      excerpt: "Discover essential principles and practices for writing clean, maintainable code. From naming conventions to architecture patterns, elevate your coding skills to the next level.",
      image: blogDesignImage,
      author: "Sarah Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Best Practices"
    },
    {
      title: "Boost Your Productivity with These Developer Tools",
      excerpt: "Explore the latest tools and techniques that can supercharge your development workflow. From VS Code extensions to automation scripts, become a more efficient developer.",
      image: blogProductivityImage,
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Productivity"
    },
    {
      title: "Understanding TypeScript: A Developer's Guide",
      excerpt: "Master TypeScript and bring type safety to your JavaScript projects. Learn advanced features, best practices, and how to integrate TypeScript into existing codebases.",
      image: blogTechImage,
      author: "Emma Wilson",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "TypeScript"
    },
    {
      title: "Responsive Design Patterns for Modern Web Apps",
      excerpt: "Create beautiful, responsive interfaces that work seamlessly across all devices. Explore CSS Grid, Flexbox, and modern layout techniques for stunning web experiences.",
      image: blogDesignImage,
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "Design"
    },
    {
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Stay ahead of the curve with the latest trends shaping the future of web development. From AI integration to progressive web apps, discover what's coming next.",
      image: blogProductivityImage,
      author: "Lisa Thompson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "Trends"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Articles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our latest insights on technology, development, and digital innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
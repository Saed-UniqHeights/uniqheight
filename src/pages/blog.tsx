import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const blogs = [
  {
    title: "Action Tracking Tips",
    date: "March 24, 2025",
    excerpt:
      "Selling on Amazon means juggling countless tasks—inventory updates, pricing adjustments, customer messages...",
    img: "/assets/image2.avif",
    content:
      "Full article on tracking actions, optimizing your daily operations, and keeping your Amazon business smooth.",
  },
  {
    title: "Analytics Made Easy",
    date: "March 24, 2025",
    excerpt:
      "How to interpret seller data without the overwhelm and use it to your advantage.",
    img: "/assets/analaytics.jpg",
    content:
      "Full article on making sense of Amazon data dashboards, metrics, and more.",
  },
  {
    title: "Boosting Seller Feedback",
    date: "March 22, 2025",
    excerpt:
      "Strategies to get more positive feedback and reduce negative reviews effectively.",
    img: "/assets/Feedback.jpeg",
    content:
      "Full article on collecting feedback, automating requests, and responding professionally.",
  },
  {
    title: "Mastering Amazon FBA",
    date: "March 20, 2025",
    excerpt:
      "A step-by-step guide to maximizing your profits through Amazon's FBA program.",
    img: "/assets/FBA.webp",
    content:
      "Detailed guide on choosing FBA products, prepping shipments, and optimizing costs.",
  },
  {
    title: "Customer Message Automation",
    date: "March 18, 2025",
    excerpt:
      "Learn how to automate common buyer communications without losing the personal touch.",
    img: "/assets/Amzon1.webp",
    content:
      "Insights on auto-responders, templates, and tools to save time and boost satisfaction.",
  },
];

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < blogs.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const selectedBlog = selectedIndex !== null ? blogs[selectedIndex] : null;

  return (
    <div className="relative mx-auto px-4 py-6 flex min-h-screen flex-col items-center justify-between">
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="flex flex-col min-h-screen pt-24 relative overflow-hidden">
        <span className="text-6xl font-bold mb-6 text-blue-600">Blogs</span>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid gap-6">
            {blogs.slice(0, 2).map((blog, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-sm shadow-sm"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="md:w-[700px] md:h-[400px] object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">
                    Published on {blog.date}
                  </p>
                  <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
                  <p className="text-sm text-gray-700 mt-2">{blog.excerpt}</p>
                  <Button
                    className="mt-4"
                    variant="outline"
                    onClick={() => handleOpen(index)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-700">
              More to Read
            </h2>
            {blogs.slice(2).map((blog, index) => (
              <Card
                key={index + 2}
                className="flex gap-4 p-2 px-6 overflow-hidden rounded-sm"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-96 h-50 object-cover"
                />
                <CardContent className="p-2">
                  <p className="text-xs text-gray-400">{blog.date}</p>
                  <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                    {blog.title}
                  </h3>
                  <Button
                    variant="link"
                    className="p-0 text-blue-600 rounded-lg"
                    onClick={() => handleOpen(index + 2)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center space-x-6 space-y-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Twitter size={16} /> Follow us on Twitter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Instagram size={16} /> Follow us on Instagram
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Linkedin size={16} /> Connect on LinkedIn
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          {selectedBlog && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={selectedBlog.img}
                alt={selectedBlog.title}
                className="rounded-md object-cover w-full h-full"
              />
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-2">
                    {selectedBlog.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-sm text-gray-500 mb-4">
                  {selectedBlog.date}
                </p>
                <p className="text-gray-700 mb-6">{selectedBlog.content}</p>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    disabled={selectedIndex === 0}
                    onClick={handlePrev}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    disabled={selectedIndex === blogs.length - 1}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

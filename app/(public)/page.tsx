import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}
const features: featureProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access to a wide range of courses covering a variety of topics designed by industry experts.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: "🎮",
  },
  {
    title: "Progress Tracking",
    description:
      "Track your progress and achievements with our intuitive progress tracking system.",
    icon: "📊",
  },
  {
    title: "Community Support",
    description:
      "Connect with fellow learners and educators in our vibrant community forum.",
    icon: "💬",
  },
];
export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your learning Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover a new way to learn with our modern, interactive learning
            management system Access high-quality courses anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/courses"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Explore Courses
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}

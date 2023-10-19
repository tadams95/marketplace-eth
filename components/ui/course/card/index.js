import Image from "next/image";
import Link from "next/link";

export default function Card({ course, Footer }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={course.coverImage}
            alt={course.title}
            width={250}
            height={300}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          <p className="mt-2 text-gray-500">{course.description}</p>
          {Footer && <Footer></Footer>}
        </div>
      </div>
    </div>
  );
}

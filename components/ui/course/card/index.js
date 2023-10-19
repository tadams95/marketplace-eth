import Image from "next/image";
import Link from "next/link";

export default function Card({ course, Footer }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex h-full">
        <div className="flex-1 h-full ">
          {" "}
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={course.coverImage}
            width="200"
            height="250"
            alt={course.title}
            
          />
        </div>
        <div className="p-8 pb-4 flex-2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {course.type}
          </div>
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          <p className="mt-2 text-gray-500">
            {course.description.substring(0, 70)}...
          </p>
          {Footer && <Footer></Footer>}
        </div>
      </div>
    </div>
  );
}

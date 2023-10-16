import Modal from "@/components/ui/common/modal";
import { CourseHero, Curriculum, Keypoints } from "@/components/ui/course";

import { BaseLayout } from "@/components/ui/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import Image from "next/image";

export default function Course({course}) {
  return (
    <BaseLayout>
      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum locked={true}/>
      <Modal />
    </BaseLayout>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses();

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllCourses();

  const course = data.filter((c) => c.slug === params.slug)[0];

  return {
    props: {
      course,
    },
  };
}

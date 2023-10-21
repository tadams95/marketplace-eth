import { Breadcrumbs, Button } from "@/components";
import { useWalletInfo } from "@/components/hooks/web3/useWalletInfo";

import { CourseCard, CourseList } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/layout";
import { MarketHeader } from "@/components/ui/marketplace";
import { OrderModal } from "@/components/ui/order";

import { getAllCourses } from "@/content/courses/fetcher";
import { useState } from "react";

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse } = useWalletInfo();
  const purchaseCourse = (order) => {
    alert(JSON.stringify(order))
  }

  return (
    <>
      <div className="py-4">
        <MarketHeader />
      </div>

      <CourseList courses={courses}>
        {(course) => (
          <CourseCard
            key={course.id}
            disabled={!canPurchaseCourse}
            course={course}
            Footer={() => (
              <div>
                <Button
                  onClick={() => setSelectedCourse(course)}
                  variant="lightPurple"
                  disabled={!canPurchaseCourse}
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </CourseList>

      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onSubmit={purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;

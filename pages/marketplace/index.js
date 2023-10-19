import { Button, Modal } from "@/components";
import { useAccount } from "@/components/hooks/web3/useAccount";
import { useNetwork } from "@/components/hooks/web3/useNetwork";

import { CourseCard, CourseList } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/layout";
import { Walletbar } from "@/components/ui/web3";

import { getAllCourses } from "@/content/courses/fetcher";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <>
      <div className="py-4">
        <Walletbar
          address={account.data}
          network={network.data}
          targetNetword={network.target}
          isSupported={network.isSupported}
        />
      </div>

      <CourseList courses={courses}>
        {(course) => (
          <CourseCard
            key={course.id}
            course={course}
            Footer={() => <div >
              <Button variant="lightPurple" >
                Purchase
              </Button>
            </div>}
          />
        )}
      </CourseList>
      <Modal isOpen={false}/>
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

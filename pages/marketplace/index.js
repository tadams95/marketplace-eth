import { useAccount } from "@/components/hooks/web3/useAccount";
import { useNetwork } from "@/components/hooks/web3/useNetwork";

import { CourseList } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/layout";
import { Walletbar } from "@/components/ui/web3";

import { getAllCourses } from "@/content/courses/fetcher";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <>
      <div className="py-4">
        { network.data}
        <Walletbar address={account.data} />
      </div>

      <CourseList courses={courses} />
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
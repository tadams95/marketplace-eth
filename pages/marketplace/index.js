import { Button } from "@/components";
import { useAccount } from "@/components/hooks/web3/useAccount";
import { useEthPrice } from "@/components/hooks/web3/useETHprice";
import { useNetwork } from "@/components/hooks/web3/useNetwork";

import { CourseCard, CourseList } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/layout";
import { OrderModal } from "@/components/ui/order";
import { EthRates, Walletbar } from "@/components/ui/web3";

import { getAllCourses } from "@/content/courses/fetcher";
import { useState } from "react";

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { account } = useAccount();
  const { network } = useNetwork();
  const { eth } = useEthPrice();

  const canPurchaseCourse = !!(account.data && network.isSupported);

  return (
    <>
      <div className="py-4">
        <Walletbar
          address={account.data}
          network={network.data}
          targetNetword={network.target}
          isSupported={network.isSupported}
        />

        <EthRates eth={eth.data} ethPerItem={eth.perItem} />
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

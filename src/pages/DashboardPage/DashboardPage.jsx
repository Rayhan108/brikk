/* eslint-disable no-unused-vars */

import { useState } from "react";
import dayjs from "dayjs";


import Stats from "../../component/DashboardPage/Stats";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 1900;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className=" container mx-auto font-title mb-5">
    
      <div className="flex flex-col justify-between items-center pt-0 mt-0 mb-1"></div>
      {/* main content */}
      <Stats />
      {/* <PracticeSession /> */}
      <div className="flex gap-10 w-[100%]">
        {/* <RecentActivity /> */}

        {/* <Question /> */}
      </div>
    </div>
  );
}

export default DashboardPage;

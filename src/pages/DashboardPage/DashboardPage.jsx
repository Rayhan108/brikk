/* eslint-disable no-unused-vars */

import { useState } from "react";
import dayjs from "dayjs";


import Stats from "../../component/DashboardPage/Stats";
import Graph from "../../component/DashboardPage/Graph";
import RecentJoin from "../../component/DashboardPage/RecentJoin";

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
    

      {/* main content */}
      <Stats />
  <Graph/>
  <RecentJoin/>
 
    </div>
  );
}

export default DashboardPage;

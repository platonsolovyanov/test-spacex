import * as React from "react";

import { FilterSelect } from "./FilterSelect";

interface FilterInt {
  launchSite: any;
}

export const FilterWrapper = (props: FilterInt) => {
  const { launchSite } = props;

  const [selectValue, setSelectValue] = React.useState();

  function handleChange(event: any) {
    console.log(event.target.value);
  }
  return (
    <div className="filter-wrapper">
      <FilterSelect
        selectValue={selectValue}
        handleChange={handleChange}
        launchSite={launchSite}
        label="Launches"
      />
      <FilterSelect
        selectValue={selectValue}
        handleChange={handleChange}
        launchSite={launchSite}
        label="Rocket"
      />
    </div>
  );
};

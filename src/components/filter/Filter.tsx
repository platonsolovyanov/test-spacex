import * as React from "react";

import { FilterSelect } from "./FilterSelect";

interface FilterInt {
  launchSite: any;
  spaceRocket: any;
}

export const FilterWrapper = (props: FilterInt) => {
  const { launchSite, spaceRocket } = props;

  const [selectValue, setSelectValue] = React.useState();

  function handleChange(event: any) {
    console.log(event.target.value);
  }
  return (
    <div className="filter-wrapper">
      <FilterSelect
        selectValue={selectValue}
        handleChange={handleChange}
        selectOption={launchSite}
        label="Launches"
        typeFilter={TypeFilter.LaunchSite}
      />
      <FilterSelect
        selectValue={selectValue}
        handleChange={handleChange}
        selectOption={spaceRocket}
        label="Rocket"
        typeFilter={TypeFilter.SpaceRocket}
      />
    </div>
  );
};

enum TypeFilter {
  LaunchSite,
  SpaceRocket,
}

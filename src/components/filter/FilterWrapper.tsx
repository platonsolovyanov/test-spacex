import * as React from "react";

import { FilterSelect } from "./FilterSelect";

interface FilterInt {
  spaceXData: any;
  launchSite: any;
  spaceRocket: any;
  setFilterSpaceXData: any;
  filterSpaceXData: any;
}

export const FilterWrapper = (props: FilterInt) => {
  const {
    spaceXData,
    launchSite,
    spaceRocket,
    setFilterSpaceXData,
    filterSpaceXData,
  } = props;

  const [selectValue, setSelectValue] = React.useState<any>({
    launchSite: "NONE",
    spaceRocket: "NONE",
  });

  function handleChange(event: any) {
    const nameSelect = event.target.name;
    const valueSelect = event.target.value;

    if (nameSelect === "launchSite") {
      setSelectValue({ ...selectValue, launchSite: valueSelect });
    }

    if (nameSelect === "spaceRocket") {
      setSelectValue({ ...selectValue, spaceRocket: valueSelect });
    }

    console.log(selectValue);
  }

  return (
    <div className="filter-wrapper">
      <FilterSelect
        handleChange={handleChange}
        selectOption={launchSite}
        label="Launches"
        typeFilter={TypeFilter.LaunchSite}
      />
      <FilterSelect
        handleChange={handleChange}
        selectOption={spaceRocket}
        label="Rocket"
        typeFilter={TypeFilter.SpaceRocket}
      />
    </div>
  );
};

enum TypeFilter {
  LaunchSite = "launchSite",
  SpaceRocket = "spaceRocket",
}

// if (nameSelect === "launchSite") {

//   const newArrLaunchSite = spaceXData.filter((elFilter: any) => {
//     return elFilter["launch_site"]["site_name"] === valueSelect;
//   });
//   // setFilterSpaceXData([...filterSpaceXData, ...newArrLaunchSite]);
// }
// if (nameSelect === "spaceRocket") {
//   // const newArrSpaceRocket = spaceXData.filter((elFilter: any) => {
//   //   return elFilter["rocket"]["rocket_name"] === valueSelect;
//   // });
//   // setFilterSpaceXData([...filterSpaceXData, ...newArrSpaceRocket]);
//   // console.log(newArrSpaceRocket);
// }

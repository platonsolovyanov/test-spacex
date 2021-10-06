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
  }

  React.useEffect(() => {
    const newArrLaunchSite = spaceXData.filter((elFilter: any) => {
      const launchSite = elFilter["launch_site"]["site_name"];
      if (selectValue.launchSite !== "NONE") {
        return launchSite === selectValue.launchSite;
      }
      return true;
    });

    const newFinalArr = newArrLaunchSite.filter((elFilter: any) => {
      const nameRocket = elFilter["rocket"]["rocket_name"];
      if (selectValue.spaceRocket !== "NONE") {
        return nameRocket === selectValue.spaceRocket;
      }
      return true;
    });

    setFilterSpaceXData(newFinalArr);
  }, [selectValue]);

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

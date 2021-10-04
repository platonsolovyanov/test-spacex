import * as React from "react";
import "./app-style.scss";

import { Item } from "./components/item/Item";
import { FilterWrapper } from "./components/filter/Filter";

interface SpaceRocketIdInt {
  site_id: string;
  site_name: string;
}

export const App = () => {
  const [spaceXData, setSpaceXData] = React.useState([]);
  const [spaceRocketId, setSpaceRocket] = React.useState([]);
  const [launchSite, setLaunchSite] = React.useState<SpaceRocketIdInt[]>([]);
  React.useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((el) => el.json())
      .then((item) => setSpaceXData(item));
  }, []);

  spaceXData.map((elMap) => {
    const site = elMap["launch_site"];

    const check = launchSite.some((elSome) => {
      return site["site_id"] === elSome.site_id;
    });

    if (!check) {
      setLaunchSite([
        ...launchSite,
        { site_id: site["site_id"], site_name: site["site_name"] },
      ]);
    }
  });

  return (
    <div className="lo">
      <FilterWrapper launchSite={launchSite} />
      <Item spaceXData={spaceXData} />
    </div>
  );
};

import * as React from "react";
import "./app-style.scss";

import { Item } from "./components/item/Item";
import { FilterWrapper } from "./components/filter/FilterWrapper";

interface LaunchSiteInt {
  site_id: string;
  site_name: string;
}

interface SpaceRocketInt {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

// const gag = [
//   {
//     rocket: {
//       rocket: "falcon1",
//       rocket_name: "Falcon 1",
//       rocket_type: "Merlin A",
//     },
//     launch_site: {
//       site_id: "kwajalein_atoll",
//       site_name: "Kwajalein Atoll",
//       site_name_long: "Kwajalein Atoll Omelek Island",
//     },
//   },
// ];

export const App = () => {
  React.useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((el) => el.json())
      .then((item) => setSpaceXData(item));
  }, []);

  const [spaceXData, setSpaceXData] = React.useState([]);
  const [launchSite, setLaunchSite] = React.useState<LaunchSiteInt[]>([]);
  const [spaceRocket, setSpaceRocket] = React.useState<SpaceRocketInt[]>([]);

  const [filterSpaceXData, setFilterSpaceXData] = React.useState([]);

  spaceXData.map((elMap) => {
    const site = elMap["launch_site"];
    const rocket = elMap["rocket"];

    const checkSite = launchSite.some((elSomeSite) => {
      return site["site_id"] === elSomeSite.site_id;
    });

    const checkRocket = spaceRocket.some((elSomeRocket) => {
      return rocket["rocket_id"] === elSomeRocket.rocket_id;
    });

    if (!checkSite) {
      setLaunchSite([
        ...launchSite,
        { site_id: site["site_id"], site_name: site["site_name"] },
      ]);
    }
    if (!checkRocket) {
      setSpaceRocket([
        ...spaceRocket,
        {
          rocket_id: rocket["rocket_id"],
          rocket_name: rocket["rocket_name"],
          rocket_type: rocket["rocket_type"],
        },
      ]);
    }
  });

  return (
    <div className="lo">
      <FilterWrapper
        spaceXData={spaceXData}
        launchSite={launchSite}
        spaceRocket={spaceRocket}
        filterSpaceXData={filterSpaceXData}
        setFilterSpaceXData={setFilterSpaceXData}
      />
      <Item spaceXData={spaceXData} />
    </div>
  );
};

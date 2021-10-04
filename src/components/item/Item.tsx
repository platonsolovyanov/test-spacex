import * as React from "react";
import "./item-style.scss";

interface ItemInt {
  spaceXData: any;
}

export const Item = (props: ItemInt) => {
  const { spaceXData } = props;

  function getDate(strDate: any) {
    const date = new Date(`${strDate}`);

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  return (
    <>
      {spaceXData.map((item: any, index: number) => {
        return (
          <div className="mission-item" key={index}>
            <p>{index + 1}</p>
            <img
              className="img-rocket"
              src={item["links"].mission_patch_small}
              alt=""
            />
            <div className="mission-info">
              <div className="mission-info__top">
                <p className="name">{item.mission_name}</p>
                <p className="date">{getDate(item.launch_date_utc)}</p>
              </div>

              <p className="details">{item.details}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

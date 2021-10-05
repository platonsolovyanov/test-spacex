import * as React from "react";

interface FilterSelectInt {
  handleChange: any;
  label: string;
  selectOption: any;
  typeFilter: string;
}

// 'launchSite' 'spaceRocket'

export const FilterSelect = (props: FilterSelectInt) => {
  const { handleChange, selectOption, label, typeFilter } = props;
  return (
    <div>
      <p>{label}</p>
      <select name={typeFilter} onChange={handleChange}>
        <option value="NONE">None</option>
        {selectOption.map((el: any, index: number) => {
          return (
            (typeFilter === "launchSite" && (
              <option value={el.site_name} key={index}>
                {el.site_name}
              </option>
            )) || (
              <option value={el.rocket_name} key={index}>
                {el.rocket_name}
              </option>
            )
          );
        })}
      </select>
    </div>
  );
};

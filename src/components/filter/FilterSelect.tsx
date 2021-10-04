import * as React from "react";

interface FilterSelectInt {
  selectValue: any;
  handleChange: any;
  label: string;
  launchSite: any;
}

export const FilterSelect = (props: FilterSelectInt) => {
  const { selectValue, handleChange, launchSite, label } = props;
  return (
    <div>
      <p>{label}</p>
      <select value={selectValue} onChange={handleChange}>
        <option value="NONE">None</option>
        {launchSite.map((el: any, index: number) => {
          return (
            <option value={el.site_name} key={index}>
              {el.site_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

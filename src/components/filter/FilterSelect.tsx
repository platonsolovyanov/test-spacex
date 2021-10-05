import * as React from "react";

interface FilterSelectInt {
  selectValue: any;
  handleChange: any;
  label: string;
  selectOption: any;
  typeFilter: number;
}

export const FilterSelect = (props: FilterSelectInt) => {
  const { selectValue, handleChange, selectOption, label, typeFilter } = props;
  console.log(typeFilter);
  return (
    <div>
      <p>{label}</p>
      <select value={selectValue} onChange={handleChange}>
        <option value="NONE">None</option>
        {selectOption.map((el: any, index: number) => {
          return (
            (!typeFilter && (
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

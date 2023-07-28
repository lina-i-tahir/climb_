import React from "react";
import "./ClimbsList.css";
import { useClimbs } from "./hooks/useClimbs";

const [selectedValue, setSelectedValue] = useState();

const ClimbsList = () => {
  const { error, loading, data } = useClimbs();

  if (loading) return "Loading";
  if (error) return `Error ${error.message}`;

  return (
    <div className="ClimbsList">
      <select
        onChange={(e) => {
          const findValue = data.areas?.find((x) => x.id === e.target.value);
          // console.log(findValue);
          setSelected(findValue);
        }}
      >
        {data.areas.map((climbs) => {
          return (
            // adding value === id
            <option key={climbs.id} value={climbs.id}>
              {climbs.areaName}
            </option>
          );
        })}
      </select>
    </div>
    // {selected ? <useClimbs = {selected} /> : null}

    // <div className="ClimbsList">
    //   {data.areas.map((climbs) => {
    //     return (
    //       <div>
    //         <ul>
    //           <li>
    //             Area Name: {climbs.areaName} Tried: {climbs.totalClimbs}
    //           </li>
    //           <li>{climbs.content.description}</li>
    //         </ul>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default ClimbsList;

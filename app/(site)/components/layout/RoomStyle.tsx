import React from "react";
import { SelectComponent } from "../SelectComponent";
import { numberOfRenders, privacy, resolution, roomStyles } from "../constants/data";

export default function RoomStyle() {
  return (
    <div className="flex gap-5 w-full">
      <div className="space-y-3 w-full">
        <h2 className="font-semibold">Room</h2>
        <div className="w-full relative">
          <SelectComponent items={roomStyles} placeholder="Select Style" title="Style" />
        </div>
      </div>
      <div className="space-y-3 w-full">
        <h2 className="font-semibold">Number Of Renders</h2>
        <div className="w-full relative">
          <SelectComponent items={numberOfRenders} placeholder="Select Number Of Renders" title="Number Of Renders" />
        </div>
      </div>
      <div className="space-y-3 w-full">
        <h2 className="font-semibold">Resolution</h2>
        <div className="w-full relative">
          <SelectComponent items={resolution} placeholder="Select Resolution" title="Resolution" />
        </div>
      </div>
      <div className="space-y-3 w-full">
        <h2 className="font-semibold">Privacy</h2>
        <div className="w-full relative">
          <SelectComponent items={privacy} placeholder="Select Privacy" title="Privacy" />
        </div>
      </div>
    </div>
  );
}

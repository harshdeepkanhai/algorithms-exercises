import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  snapshot(nums);
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
      snapshot(nums);
    }
    jums[j + 1] = numberToInsert;
    snapshot(nums);
  }
  snapshot(nums);
  return nums;

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}

import { describe, expect, it } from "vitest";
import { addLocationsToCommits } from "./addLocationsToCommits";

describe("addLocationsToCommits", () => {
  it("should run", () => {
    expect(addLocationsToCommits([])).toEqual([]);
  });
});

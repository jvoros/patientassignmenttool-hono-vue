import { describe, expect, it, expectTypeOf } from "vitest";
import { createBoard } from "../core";
import dummy from "./dummy";

describe("createBoard", () => {
  it("should make a board store", (c) => {
    const store = createBoard({ slug: "smh", zoneConfig: dummy.zones });
    expectTypeOf(store.getBoard()).toEqualTypeOf<Board>();
  });
  it("should perform board actions and add undo patches", () => {
    const store = createBoard({ slug: "smh", zoneConfig: dummy.zones });
    const res = store.signIn({ provider: dummy.providers[0], schedule: dummy.schedules[0] });
    expectTypeOf(res.board).toEqualTypeOf<Board>();
    expectTypeOf(res.board.events[res.board.timeline[0]].patches).toEqualTypeOf<Patch[]>();
  });
  it("should perform undo", () => {
    const store = createBoard({ slug: "smh", zoneConfig: dummy.zones });
    store.signIn({ provider: dummy.providers[0], schedule: dummy.schedules[0] });
    const res = store.undo();
    expect(Object.keys(res.board.shifts).length).toEqual(0);
    expect(res.board.timeline.length).toEqual(0);
  });
});

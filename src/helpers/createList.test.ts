import { createList, createTitle } from "./createList";

describe("Test createList", () => {
  const expectedListItem = expect.objectContaining({
    id: expect.any(Number),
    title: expect.any(String),
  });

  test("call without arguments", () => {
    const expectedList = Array(20).fill(expectedListItem);
    const expectedIdArray = Array(20)
      .fill(0)
      .map((_, index) => index);

    expect(createList()).toHaveLength(20);
    expect(createList()).toEqual(expectedList);
    expect(createList().map((listItem) => listItem.id)).toEqual(
      expectedIdArray
    );
  });

  test("call with arguments", () => {
    const expectedList = Array(5).fill(expectedListItem);
    const expectedIdArray = Array(5)
      .fill(0)
      .map((_, index) => index + 5);

    expect(createList(5, 5)).toHaveLength(5);
    expect(createList(5, 5)).toEqual(expectedList);
    expect(createList(5, 5).map((listItem) => listItem.id)).toEqual(
      expectedIdArray
    );
  });
});

describe("Test createTitle", () => {
  test("string length is 10", () => {
    expect(createTitle()).toHaveLength(10);
  });

  test("string matches req", () => {
    expect(createTitle()).toMatch(/[A-z0-9]{10}/);
  });
});

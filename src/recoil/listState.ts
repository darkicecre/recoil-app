import { atom, selector } from "recoil";

const defaultData = [
  {
    id: 1,
    content: "Wake up this morning",
    status: "new",
  },
  {
    id: 2,
    content: "Make housework",
    status: "inprogress",
  },
  {
    id: 3,
    content: "Make breakfast",
    status: "done",
  },
  {
    id: 4,
    content: "Make homework",
    status: "new",
  },
  {
    id: 5,
    content: "Watching tivi",
    status: "new",
  },
  {
    id: 6,
    content: "Drink some tea",
    status: "new",
  },
];

const listTodoState = atom({
  key: "listTodo",
  default: defaultData,
});

export const newListState = selector({
  key: "newList",
  get: ({ get }: any) => {
    const list = get(listTodoState);
    return list.filter((item: any) => item.status === "new");
  },
  set: ({ get, set }: any, newValue: any) => {
    const list = get(listTodoState);
    const newTodo = {
      id: new Date(),
      content: newValue,
      status: "new",
    };
    set(listTodoState, [...list, newTodo]);
  },
});
export const inprogressListState = selector({
  key: "inprogressList",
  get: ({ get }: any) => {
    const list = get(listTodoState);
    return list.filter((item: any) => item.status === "inprogress");
  },
  set: ({ get, set }: any, id: any) => {
    const list = get(listTodoState);
    set(
      listTodoState,
      list.map((item: any) =>
        item.id === id ? { ...item, status: "inprogress" } : item
      )
    );
  },
});
export const doneListState = selector({
  key: "doneList",
  get: ({ get }: any) => {
    const list = get(listTodoState);
    return list.filter((item: any) => item.status === "done");
  },
  set: ({ get, set }: any, id: any) => {
    const list = get(listTodoState);
    set(
      listTodoState,
      list.map((item: any) =>
        item.id === id ? { ...item, status: "done" } : item
      )
    );
  },
});
export const removeListState = selector({
  key: "removeList",
  get: ({ get }: any) => {
    const list = get(listTodoState);
    return list.filter((item: any) => item.status === "done");
  },
  set: ({ get, set }: any, item: any) => {
    let list = get(listTodoState);
    let replaceList = [];
    for (var i = 0; i < list.length; i++) {
      if (i != 2) {
        replaceList.push(list[i]);
      }
    }
    set(listTodoState, replaceList);
  },
});

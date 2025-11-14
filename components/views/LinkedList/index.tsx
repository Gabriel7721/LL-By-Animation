import { SinglyLinkedList } from "../../../ds/linked_list";

export interface LinkedList {
  blockUI: boolean;
  setBlockUI: (val: boolean) => void;
  items: () => any[];
  raw: () => SinglyLinkedList<unknown>;
  hightlightNodeId: string;
  insertBack: (data: any) => void;
  insertFront: (data: any) => void;
  insertAt: (index: number, data: any) => Promise<void>;
  removeFront: () => void;
  removeBack: () => void;
  remove: (val: any) => Promise<void>;
  get: (val: any) => void;
  updateData: (at: number, data: any) => Promise<void>;
  reverse: () => void;
  clear: () => void;
  isEmpty: () => boolean;
  replace: (at: number, data: any) => void;
  removeAt: (index: number) => Promise<void>;
  setDelay: (delay: number) => void;
  size: () => number;
}

export type LinkedListOperations =
  | "insertBack"
  | "insertFront"
  | "insertAt"
  | "removeFront"
  | "removeBack"
  | "removeAt"
  | "remove"
  | "get"
  | "updateData"
  | "reverse"
  | "clear"
  | "replace"
  | "updateData";

interface ISuboperations {
  [operation: string]: {
    name: LinkedListOperations;
    allowed: string[];
    description?: string;
  }[];
}

export const LinkedListSubOperations: ISuboperations = {
  insertion: [
    {
      name: "insertBack",
      allowed: ["data"],
      description: `Còn được gọi là push(). Thao tác này chèn một node mới vào cuối Linked List. Thông thường mất O(n), nhưng vì có con trỏ tail riêng nên thời gian thực hiện chỉ là O(1).`,
    },
    {
      name: "insertFront",
      allowed: ["data"],
      description: `Còn được gọi là unshift(). Có độ phức tạp O(1). Thao tác chèn node mới vào đầu Linked List và con trỏ head sẽ trỏ đến node vừa được thêm.`,
    },
    {
      name: "insertAt",
      allowed: ["index", "data"],
      description: `Chèn một node mới tại vị trí index chỉ định. Thời gian thực hiện O(n).\n0 ≤ index ≤ n-1 (với n là kích thước của Linked List).`,
    },
  ],

  deletion: [
    {
      name: "remove",
      allowed: ["data"],
      description: `Xóa node đầu tiên có data bằng với giá trị được truyền vào. Thời gian thực hiện O(n).`,
    },
    {
      name: "removeAt",
      allowed: ["index"],
      description: `Xóa node tại vị trí index chỉ định, thời gian thực hiện O(n).\n0 ≤ index ≤ n-1 (với n là kích thước của Linked List).`,
    },
    {
      name: "removeFront",
      allowed: [""],
      description: `Còn được gọi là unshift(). Thao tác này xóa node đầu tiên khỏi Linked List và có độ phức tạp O(1).`,
    },
    {
      name: "removeBack",
      allowed: [""],
      description: `Còn được gọi là pop(). Thao tác xóa node cuối trong Linked List, với độ phức tạp O(n).`,
    },
  ],

  utilities: [
    {
      name: "reverse",
      allowed: [""],
      description: `Đảo ngược toàn bộ Linked List bằng cách hoán đổi liên kết giữa các node và cập nhật lại con trỏ head.`,
    },
    {
      name: "updateData",
      allowed: ["data", "index"],
      description: `Còn được gọi là set(). Thao tác thay đổi data của node tại vị trí index. Độ phức tạp O(n).\n0 ≤ index ≤ n-1.`,
    },
    {
      name: "replace",
      allowed: ["data", "index"],
      description: `Tương tự updateData(), nhưng thay vì sửa data, thao tác này xóa node cũ và tạo node mới với data mới tại cùng vị trí index. Độ phức tạp O(n).\n0 ≤ index ≤ n-1.`,
    },
    {
      name: "clear",
      allowed: [""],
      description: `Xóa toàn bộ Linked List bằng cách đặt cấu trúc danh sách về trạng thái undefined. Thời gian thực hiện O(1).`,
    },
  ],
};

export { LinkedListView } from "./LinkedList";

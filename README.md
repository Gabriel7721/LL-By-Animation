## Đây là một dự án **Next.js** được khởi tạo bằng lệnh

`npx create-next-app@latest [project-name] [options]`

---

## **Bắt đầu**

Trước tiên, hãy cài đặt dependencies bằng lệnh:

```bash
npm install
```

Sau khi cài đặt hoàn tất, khởi chạy máy chủ development:

```bash
npm run dev
```

Truy cập địa chỉ [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

---

## **Giới thiệu về Linked List**

**Linked list** là một _data structure_ tuyến tính, trong đó các phần tử dữ liệu — gọi là **node** — được lưu trữ tại các vùng nhớ rời rạc và liên kết với nhau thông qua **pointer**. Mỗi node sẽ chứa hai thành phần chính:

- **data**: giá trị hoặc payload cần lưu trữ
- **pointer/reference**: trỏ đến node kế tiếp trong danh sách

Đối với **Singly Linked List**, mỗi node chỉ giữ _một_ pointer trỏ đến **next node**, tạo thành một chuỗi liên kết đơn hướng.

Một số đặc tính quan trọng:

- **Không yêu cầu vùng nhớ liên tục**, khác với array.
- **Insert và delete linh hoạt**, đặc biệt ở đầu danh sách (head) có độ phức tạp O(1).
- **Truy cập ngẫu nhiên không khả thi**, vì phải duyệt tuần tự từ head.
- **Dễ dàng mở rộng** mà không cần phân bổ lại toàn bộ bộ nhớ như array.

Các thao tác phổ biến:

- `insertFront()` – chèn node vào đầu danh sách
- `insertBack()` – chèn node vào cuối danh sách
- `insertAt(index)` – chèn tại vị trí chỉ định
- `removeFront()` và `removeBack()` – xóa node ở đầu/cuối
- `removeAt(index)` – xóa node tại vị trí bất kỳ
- `reverse()` – đảo ngược toàn bộ danh sách
- `updateData(index, data)` – cập nhật dữ liệu tại node chỉ định

**Linked List** là cấu trúc nền tảng thường được dùng trong nhiều thuật toán, hệ thống runtime, compiler, memory management và các thiết kế data structure phức tạp hơn.

---

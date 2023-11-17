Vấn đề:
- Website cung cấp nội dung dạng text, người dùng phải trả phí để có thể xem được nội dung (hoặc phải xem quảng cáo để xem nội dung)
- Website bên thứ 3 thực hiện crawler để lấy cắp nội dung và publish ở website khác, làm ảnh hưởng đến doanh thu của website.

Giải pháp:
- Ngăn chặn crawler có thể lấy được dữ liệu text của website.
- Ngăn chặn crawler sử dụng các biện pháp đặc thù (phân tích DOM, thực thi lệnh javascript, ...).
- Ngăn chặn thao tác copy nội dung.

Sử dụng shadow-root để ngăn chặn việc phân tích DOM hay thực thi lệnh javascript đối với nội dung cần được bảo vệ.

Shadow-root là gì?
Shadow-root là một khái niệm trong công nghệ Shadow DOM, giúp tạo ra các phần tử HTML có tính riêng tư và cô lập khỏi các phần tử HTML khác trong trang web. Shadow-root là phần tử gốc của cây Shadow DOM, được gắn vào một phần tử chủ (host element), là một phần tử DOM thông thường. Shadow-root đóng vai trò là ranh giới giữa phần tử chủ và Shadow DOM, cung cấp tính đóng gói.
Shadow-root có 2 laọi: open hoặc closed. Nếu loại là open, các phần tử trong shadow-root có thể truy cập từ bên ngoài. Nếu loại là closed, các phần tử sẽ được bảo vệ và không thể truy cập từ bên ngoài.

Hạn chế:
- Hiện chưa thấy có hạn chế gì.

insert into categories (id, name) values (0, 'Văn học');
insert into categories (id, name) values(1, 'Lãng mạn');
insert into categories (id, name) values    (2, 'Bí ẩn');
insert into categories (id, name) values    (3, 'Khoa học công nghệ – Kinh tế');
insert into categories (id, name) values    (4, 'Kinh dị, giật gân');
insert into categories (id, name) values    (5, 'Truyền cảm hứng');
insert into categories (id, name) values   (6, 'Tiểu sử, tự truyện và hồi ký');
insert into categories (id, name) values   (7, 'Truyện ngắn');
insert into categories (id, name) values   (8, 'Dạy nấu ăn');
insert into categories (id, name) values   (9, 'Bài luận');
insert into categories (id, name) values    (10, 'Lịch sử');

insert into regulations (id, title, value) values (0, 'Số lượng sách nhập ít nhất', 150);
insert into regulations (id, title, value) values (1, 'Số lượng tồn ít hơn', 300);
insert into regulations (id, title, value) values (2, 'Nợ tối đa của khách hàng', 20);
insert into regulations (id, title, value) values (3, 'Lượng sách tồn sau bán ít nhắt', 20);
insert into regulations (id, title, value) values (4, 'Số tiền thu không được vượt quá số tiền nợ', 1);

insert into books (id, title, author, category_id) values (0, 'Kỹ thuật lập trình', "Khoa công nghệ thông tin", 3);
INSERT INTO books (id, title, author, category_id) VALUES (1, 'Tắt đèn', 'Ngô Tất Tố', 5);
INSERT INTO books (id, title, author, category_id) VALUES (2, 'Số Đỏ', 'Vũ Trọng Phụng', 5);
INSERT INTO books (id, title, author, category_id) VALUES (3, 'Từ điển bách khoa toàn thư Việt Nam', 'Various', 6);
INSERT INTO books (id, title, author, category_id) VALUES (4, 'Lão Hạc', 'Nam Cao', 5);
INSERT INTO books (id, title, author, category_id) VALUES (5, 'Nhật ký của mẹ', 'Lê thị Xuân Phương', 7);
INSERT INTO books (id, title, author, category_id) VALUES (6, 'Đất nước', 'Đoàn Giỏi', 5);
INSERT INTO books (id, title, author, category_id) VALUES (7, 'Dòng Sông Không Trở Lại', 'Nguyễn Nhật Ánh', 8);
INSERT INTO books (id, title, author, category_id) VALUES (8, 'Cánh đồng bất tận', 'Nguyễn Ngọc Tư', 8);
INSERT INTO books (id, title, author, category_id) VALUES (9, 'Tôi thấy hoa vàng trên cỏ xanh', 'Nguyễn Nhật Ánh', 8);
INSERT INTO books (id, title, author, category_id) VALUES (10, 'Bến đò', 'Xuân Quỳnh', 5);

insert into customers (id, address, email, fullname, phone_number) values (0, 'Nguyễn Văn Cừ', "abc@gmail.com", "Trần Thị Kim Tiến", 0523897351);
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (1, 'Lê Duẩn', 'def@gmail.com', 'Nguyễn Văn An', '0987654321');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (2, 'Lý Thường Kiệt', 'ghi@gmail.com', 'Trương Thị Ngọc Ánh', '0912345678');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (3, 'Bạch Đằng', 'jkl@gmail.com', 'Lê Minh Khánh', '0965432198');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (4, 'Nguyễn Công Hoan', 'mno@gmail.com', 'Phạm Thị Thu Hiền', '0912876543');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (5, 'Trần Phú', 'pqr@gmail.com', 'Nguyễn Văn Đạt', '0987654321');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (6, 'Hoàng Diệu', 'stu@gmail.com', 'Trần Thị Mai', '0912345678');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (7, 'Nguyễn Văn Cừ', 'vwx@gmail.com', 'Lê Thị Thanh Hằng', '0965432198');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (8, 'Ngô Quyền', 'yz@gmail.com', 'Nguyễn Văn Minh', '0912876543');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (9, 'Lê Lợi', 'abc123@gmail.com', 'Trần Thị Thu Hà', '0987654321');
INSERT INTO customers (id, address, email, fullname, phone_number) VALUES (10, 'Hai Bà Trưng', 'def456@gmail.com', 'Nguyễn Thị Ngọc Ánh', '0912345678');


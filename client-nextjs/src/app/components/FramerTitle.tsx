import { motion, useViewportScroll, useTransform } from "framer-motion";

const FramerTitle = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 400,
          y: 0,
          scale: 1,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 1, x: 200 }}
        //   drag
      >
        <div className="w-[70%] flex-wrap">
          <h3 className="font-bold text-[60px] text-primary">
            Nguyễn Mạnh Tuấn
          </h3>
          <span className="text-gray-900 text-lg">
            Chào tất cả mọi người, mình xin giới thiệu 1 chút về mình. Mình tên
            là Nguyễn Mạnh Tuấn, mình sinh năm 2002 quê ở Đăk Lăk và hiện đang
            học chuyên nghành Kĩ Thuật Máy Tính. Mình bắt đầu học lập trình
            website vào năm 2 Đại học, vì đó là thời điểm dịch bệnh được ở nhà
            nên mình khá rảnh, mình đã bắt đầu tìm hiểu về HTML, CSS sau đó thấy
            nó tạo ra hình hình thù của 1 giao diện làm mình khá là phấn khích
            và thúc đẩy mình tìm hiểu về Javascript và React JS. Đây cũng là nền
            tảng cơ sở để mình bắt đầu học thêm nhiều thứ hay ho khác như Next
            JS và Node JS. Mình làm trang website này khi mình bắt đầu tìm hiểu
            về Next JS và muốn thực hành về nó, 1 phần muốn làm 1 trang Website
            để giới thiệu bản thân mình đến với các bạn và anh chị nhà tuyển
            dụng, một phẫn mình cũng muốn chia sẻ với các bạn về nhưng kiến thức
            mình học và tìm hiểu được đến với các bạn khác cũng đang học như
            mình. Mình hy vọng các bạn sẽ vui vẻ và tìm được điều gì đỏ tại
            trang website này nhé.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default FramerTitle;

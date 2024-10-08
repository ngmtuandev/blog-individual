import { motion, useViewportScroll, useTransform } from "framer-motion";

const Framer2 = () => {
  return (
    <div className="flex h-[100px] items-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 10,
          y: 0,
          scale: 2,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 3, x: 400 }}
        //   drag
      >
        <div className="w-[350px] mt-36 flex items-start justify-center gap-2 ">
          <div className="w-[60%] text-[5px]">
            <h3 className="uppercase font-semibold text-base text-primary">
              Website Blogs
            </h3>
            <div className="mt-1">
              <h2 className="font-bold my-1">Chức năng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>Đăng nhập, đăng ký tài khoản...</li>
                <li>Tạo bài và quản lý bài viết cá nhân</li>
                <li>
                  Tương tác bài viết người khác: thích, bình luận, đánh dấu...
                </li>
                <li>Tìm kiếm sản phẩm theo tags</li>
                <li>Responsive</li>
                <li>Infinite scroller...</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold my-1">Công nghệ sử dụng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>
                  React, Typescript, React-query, Next UI, TailWind, Zustand
                </li>
              </ul>
            </div>

            <div className="font-bold my-1">
              <span>
                <a
                  className="text-primary"
                  href="https://github.com/ngmtuandev/manhtuanmobilev2"
                  target="_blank"
                >
                  Github dự án
                </a>
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[150px] bg-red-600">Vide</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Framer2;

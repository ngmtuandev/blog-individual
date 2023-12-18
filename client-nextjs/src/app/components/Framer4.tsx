import { motion, useViewportScroll, useTransform } from "framer-motion";

const Framer4 = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 400,
          y: 0,
          scale: 2,
          // rotate: 275,
        }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 3, x: 50 }}
        //   drag
      >
        <div className="w-[350px] mt-[300px] flex items-start justify-center gap-2 ">
          <div className="w-[60%] text-[5px]">
            <h3 className="uppercase font-semibold text-base text-primary">
              EngStudy - ứng dụng học tiếng anh
            </h3>
            <div className="mt-1">
              <h2 className="font-bold my-1">Chức năng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>
                  Đăng nhập, đăng kí, xác thực qua email, số điện thoại...
                </li>
                <li>
                  Thêm từ vựng mới, học từ vựng chưa thuộc, kiểm tra từ vựng đã
                  thuộc...
                </li>
                <li>Tạo bài viết trên cộng đồng, tương tác bài viết</li>
                <li>Nhắn tin giữa các người dùng</li>
                <li>Tích hợp api chat gpt...</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold my-1">Công nghệ sử dụng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>
                  Backend : Node JS, Express, MongooseDB, Firebase, Async
                  Storage NodeMailer...
                </li>
                <li>
                  Frontend : React Native, Css, Tailwind, Javascript,
                  Redux-toolkit, Expo-av, Nativewind, Zustand, Lodash...
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

export default Framer4;

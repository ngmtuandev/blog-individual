import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Framer3 = () => {
  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5, x: 0 }}
        animate={{
          x: 600,
          y: 0,
          scale: 2,
        }}
        transition={{ duration: 3 }}
        whileInView={{ opacity: 1, scale: 3, x: 150 }}
        drag
      >
        <div className="w-[350px] flex items-start justify-center gap-2 ">
          <div className="w-[40%] h-[150px] bg-red-600">Vide</div>
          <div className="w-[60%] text-[5px]">
            <h3 className="uppercase font-semibold text-base text-primary">
              Website Thương mại điện tử
            </h3>
            <div className="mt-1">
              <h2 className="font-bold my-1">Chức năng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>Phân quyền admin, client, gửi mã đăng kí qua gmail...</li>
                <li>
                  Quản lý sản phẩm, quản lý đơn hàng, biến thể sản phẩm, quản lý
                  khách hàng...
                </li>
                <li>
                  Mua hàng, đánh giá sản phẩm, bình luận, quản lý giỏ hàng...
                </li>
                <li>Thành toán giỏ hàng qua PayPal</li>
                <li>{`Phân trang, lọc sản phẩm (màu, giá...)`}</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold my-1">Công nghệ sử dụng</h2>
              <ul style={{ listStyleType: "disc" }} className="ml-2">
                <li>Backend : Node JS, Express, MongooseDB, NodeMailer...</li>
                <li>
                  Frontend : React JS, Tailwind, Next UI, Redux-toolkit,
                  Lodash...
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
        </div>
      </motion.div>
    </div>
  );
};

export default Framer3;

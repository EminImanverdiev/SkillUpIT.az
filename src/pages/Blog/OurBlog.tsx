import img1 from "../../assets/images/blog-standard-1.jpg";
import img2 from "../../assets/images/blog-standard-2.jpg";
import img3 from "../../assets/images/blog-standard-3.jpg";
import img4 from "../../assets/images/blog-standard-4.jpg";
import img from "../../assets/images/blog-standard-shape.png";
import imgb from "../../assets/images/blog-standard-shape-2.png";

const OurBlog = () => {
  return (
    <>
      <div className=" bg-[url('./assets/images/breadcrumb-bg.jpg')] flex items-center bg-cover bg-center h-[200px] relative ">
        <div className="container">
          <div className="text-secondary text-lg">
            <span className="inline-block pr-3 border-r border-gray-400  ">
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="pl-3  ">Our Blog</span>
          </div>
          <div className="text-6xl  font-bold pt-3 ">Blog Standard</div>
        </div>
      </div>
      <div className="container flex my-32 gap-28">
        <div className="container-left  w-2/3">
          <div className="border-b pb-10">
            <img
              src={img1}
              alt="blog"
              className="rounded-t-2xl object-cover w-full "
            />
            <div className="py-6 text-gray-600">
              <span className="bg-[#EFE9FE] text-sm py-1 px-4 inline-block rounded-full">
                Education
              </span>
              <span className="px-3 border-t-2 text-center inline-block mx-3"></span>
              <span className="inline-block text-sm ">August 24, 2023</span>
            </div>
            <h1 className="font-bold text-4xl pb-6 hover:text-primary duration-500 cursor-pointer ">
              Make you love and hate Education.
            </h1>
            <p className="text-gray-500  pr-24 leading-relaxed ">
              Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec
              enim elit, interdum eu tellus quis, fermentum vehicula dolor.
              Praesent in quam erat. Nam rutrum justo vitae eros efficitur
              accumsan. Phasellus scelerisque, massa ut venenatis tristique […]
            </p>
          </div>
          <div className=" flex bg-[#DFF9F0] h-[315px] relative rounded-3xl my-10 px-12 py-7">
            <div className="pr-6">
              <span>
                <svg
                  width="44"
                  height="40"
                  viewBox="0 0 44 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 1.05264L39.9691 0L25.2477 37.0175L28.0518 40L41.1959 36.8421L44 1.05264Z"
                    fill="#031F42"
                  ></path>
                  <path
                    d="M18.7523 1.05264L14.7214 0L0 37.0175L2.80408 40L15.9482 36.8421L18.7523 1.05264Z"
                    fill="#031F42"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="pt-3  ">
              <div className="flex">
                <p className="text-[34px] leading-10">
                  We're committed to changing the way of mobile UX. We believe
                  that mobile UX has the make a real power.
                </p>
              </div>
              <div className="pt-5">
                <span className="text-base text-[#031F42] font-semibold">
                  Ralph Edwards
                </span>
                <span className="dot text-sm"> New York</span>
              </div>
              <img src={img} alt="blog" className="absolute  right-0 pr-12 " />
            </div>
          </div>
          <div className="border-b pb-10">
            <img
              src={img2}
              alt="blog"
              className="rounded-t-2xl object-cover w-full "
            />
            <div className="py-6 text-gray-600">
              <span className="bg-[#DFF9F0] text-sm py-1 px-4 inline-block rounded-full">
                Education
              </span>
              <span className="px-3 border-t-2 text-center inline-block mx-3"></span>
              <span className="inline-block text-sm ">August 24, 2023</span>
            </div>
            <h1 className="font-bold text-4xl pb-6 hover:text-primary duration-500 cursor-pointer ">
              The definition of synchronous Learning.
            </h1>
            <p className="text-gray-500  pr-24 leading-relaxed ">
              Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec
              enim elit, interdum eu tellus quis, fermentum vehicula dolor.
              Praesent in quam erat. Nam rutrum justo vitae eros efficitur
              accumsan. Phasellus scelerisque, massa ut venenatis tristique […]
            </p>
          </div>
          <div className="flex justify-center relative items-center bg-[#FFE2DB] p-14 my-16 rounded-3xl">
            <div>
              <span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0171 15.4763C19.3693 14.6103 18.5427 13.8936 17.5936 13.3751C16.6444 12.8565 15.5949 12.5481 14.5161 12.4709C13.4373 12.3936 12.3545 12.5493 11.3411 12.9273C10.3278 13.3053 9.40756 13.8968 8.64292 14.6617L4.11739 19.1873C2.74345 20.6098 1.9832 22.5151 2.00039 24.4927C2.01757 26.4703 2.81082 28.3621 4.20927 29.7606C5.60772 31.159 7.49949 31.9523 9.47712 31.9694C11.4548 31.9866 13.36 31.2264 14.7826 29.8524L17.3772 27.2729"
                    stroke="#031F42"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.983 18.4933C14.6308 19.3594 15.4574 20.076 16.4065 20.5946C17.3557 21.1132 18.4052 21.4215 19.484 21.4988C20.5628 21.5761 21.6456 21.4204 22.659 21.0424C23.6723 20.6644 24.5925 20.0729 25.3572 19.3079L29.8827 14.7824C31.2567 13.3599 32.0169 11.4546 31.9997 9.47696C31.9825 7.49933 31.1893 5.60756 29.7908 4.20911C28.3924 2.81066 26.5006 2.01742 24.523 2.00023C22.5454 1.98305 20.6401 2.74329 19.2175 4.11723L16.638 6.69679"
                    stroke="#031F42"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="text-[32px] pl-8">
              Dicunt aperiam percipitur mel ut, nec placerat cotidieque ut.
            </div>
            <img
              src={imgb}
              alt="blog"
              className="absolute right-0 pr-16 bottom-0 "
            />
          </div>
          <div className="border-b pb-10">
            <img
              src={img3}
              alt="blog"
              className="rounded-t-2xl object-cover w-full "
            />
            <div className="py-6 text-gray-600">
              <span className="bg-[#FDFFD0] text-sm py-1 px-4 inline-block rounded-full">
                Education
              </span>
              <span className="px-3 border-t-2 text-center inline-block mx-3"></span>
              <span className="inline-block text-sm ">August 24, 2023</span>
            </div>
            <h1 className="font-bold text-4xl pb-6 hover:text-primary duration-500 cursor-pointer ">
              Make you love and hate Education.
            </h1>
            <p className="text-gray-500  pr-24 leading-relaxed ">
              Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec
              enim elit, interdum eu tellus quis, fermentum vehicula dolor.
              Praesent in quam erat. Nam rutrum justo vitae eros efficitur
              accumsan. Phasellus scelerisque, massa ut venenatis tristique […]
            </p>
          </div>
          <div className=" pb-10">
            <img
              src={img4}
              alt="blog"
              className="rounded-t-2xl object-cover w-full "
            />
            <div className="py-6 text-gray-600">
              <span className="bg-[#EFE9FE] text-sm py-1 px-4 inline-block rounded-full">
                Education
              </span>
              <span className="px-3 border-t-2 text-center inline-block mx-3"></span>
              <span className="inline-block text-sm ">August 24, 2023</span>
            </div>
            <h1 className="font-bold text-4xl pb-6 hover:text-primary duration-500 cursor-pointer ">
              The oldest trick in the book
            </h1>
            <p className="text-gray-500  pr-24 leading-relaxed ">
              Aliquam eget turpis vehicula, auctor elit ac, rutrum turpis. Donec
              enim elit, interdum eu tellus quis, fermentum vehicula dolor.
              Praesent in quam erat. Nam rutrum justo vitae eros efficitur
              accumsan. Phasellus scelerisque, massa ut venenatis tristique […]
            </p>
          </div>
        </div>
        <div className="container-right    w-1/3">
          <div className="header-search inline-block relative ">
            <input
              type="search"
              placeholder="Search..."
              className="focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-30 focus:border-blue-500  p-4  bg-[#F3F4F9] text-[16px] font-semibold border rounded-[5px] w-[400px]"
            />
            <div className="absolute   right-5 top-5  text-gray-200 text-gray-{shade}  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className="text-gray-400 hover:text-blue-500 duration-300"
              >
                <path
                  d="M16.0004 16L12.3754 12.375M14.3333 7.66665C14.3333 11.3485 11.3485 14.3333 7.66665 14.3333C3.98476 14.3333 1 11.3485 1 7.66665C1 3.98476 3.98476 1 7.66665 1C11.3485 1 14.3333 3.98476 14.3333 7.66665Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="blog-categories border-b pb-5">
            <h1 className="py-5  text-xl font-semibold">Categories</h1>
            <ul className="blog-unordredlist  w-[300px]">
              <li>
                <a href="">Articles</a>
                <span>(8)</span>
              </li>
              <li>
                <a href="">Business</a>
                <span>(3)</span>
              </li>
              <li>
                <a href="">Family & Divorce</a> <span>(4)</span>
              </li>
              <li>
                <a href="">Web Design</a>
                <span>(2)</span>
              </li>
              <li>
                <a href="">Software</a> <span>(6)</span>
              </li>
              <li>
                <a href="">Video</a> <span>(8)</span>
              </li>
            </ul>
          </div>
          <div className="blogs pt-7">
            <h1 className="text-xl font-semibold">Recent Posts</h1>
            <div className="border-b py-5">
              <span className="bg-[#DFF9F0] text-xs  px-2 py-1 rounded-md">
                UI Desige
              </span>
              <p className="font-semibold text-xl py-3 pr-16">
                Google without having to hire an SEO Expert.
              </p>
              <span className="text-gray-600 text-[14px]">
                14 April, 2024<span className="dot"> </span> Minute
              </span>
            </div>
            <div className="border-b py-5">
              <span className="bg-[#EFE9FE] text-xs  px-2 py-1 rounded-md">
                UI Desige
              </span>
              <p className="font-semibold text-xl py-3 pr-16">
                Being good cyber citizens in a digital world.
              </p>
              <span className="text-gray-600 text-[14px]">
                14 April, 2024<span className="dot"> </span> Minute
              </span>
            </div>
            <div className="border-b py-5">
              <span className="bg-[#FDFFD0] text-xs  px-2 py-1 rounded-md">
                UI Desige
              </span>
              <p className="font-semibold text-xl py-3 pr-16">
                The single biggest reason why startups succeed.
              </p>
              <span className="text-gray-600 text-[14px]">
                14 April, 2024<span className="dot"> </span> Minute
              </span>
            </div>
          </div>
          <h1 className="pt-10 text-2xl font-semibold ">Tag</h1>
          <div className="blog-tag py-6 flex flex-wrap border-b">
            <span>News</span>
            <span>Counseling</span>
            <span>Career</span>
            <span>Software</span>
            <span>Development</span>
            <span>Merket</span>
            <span>Life</span>
            <span>Research</span>
            <span>Research</span>
            <span>UI Desige</span>
            <span>Team</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;

import React from "react";
import img1 from "../../assets/images/blog-stories-thumb-1.jpg";
import user1 from "../../assets/images/blog-stories-user-1.jpg";

const PopularPost = () => {
  return (
    <div className="container py-36">
      <div className="text-primary font-semibold">Our Blog</div>
      <div className="flex justify-between pb-10">
        <div className="text-[50px] font-semibold  relative z-30">
          Most Popular
          <span className="text-primary pl-3 relative  ">
            Post.
            <span className="absolute bottom-0 right-0 ">
              <svg
                className="tp-underline-shape-9 wow bounceIn"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                xmlns="http://www.w3.org/2000/svg"
                width="122"
                height="15"
                viewBox="0 0 122 15"
                fill="none"
              >
                <path
                  d="M68.5413 2.46413C66.3401 2.68509 57.7946 3.27171 49.5964 3.77416C28.1725 5.06268 19.149 5.84612 11.86 6.92924C6.17888 7.77609 0.803794 8.90046 0.521668 9.30659C0.470373 9.38043 0.447977 10.2819 0.456255 11.2903C0.458989 12.9113 0.549754 13.1964 1.16175 13.7514C1.55098 14.0981 2.07472 14.44 2.29373 14.5405C2.67667 14.7072 17.2211 13.1185 20.6754 12.5296C22.2027 12.2961 69.392 9.85568 80.9058 9.41758C85.049 9.2729 94.6883 9.15244 102.312 9.17441C109.936 9.19638 116.83 9.13577 117.609 9.07254C119.544 8.93293 121.221 7.61345 121.254 6.24332C121.252 5.41481 121.167 5.2737 120.547 5.25933C119.873 5.24683 119.872 5.21085 120.697 4.92985C121.841 4.52964 121.968 4.30905 121.278 3.8288C120.616 3.38358 120.487 2.77565 121.079 2.75498C121.294 2.74747 121.476 2.56098 121.47 2.38108C121.462 2.16519 121.323 2.02596 121.134 2.03253C120.973 2.03817 120.261 1.70278 119.573 1.29449L118.308 0.54611L95.438 1.30872C82.8724 1.71149 70.7693 2.24222 68.5413 2.46413ZM87.1555 3.25513C87.3219 3.39342 88.9412 3.48097 90.7976 3.41614C92.6552 3.3873 96.1578 3.40909 98.6124 3.5035C102.524 3.65512 102.094 3.70614 95.1211 3.80555C90.7601 3.88578 83.628 4.06279 79.2695 4.21499C74.911 4.3672 71.4109 4.41737 71.4622 4.34353C71.5392 4.23276 74.5218 4.02053 78.0988 3.8596C81.6745 3.66268 84.7366 3.41165 84.9186 3.22516C85.3109 2.88723 86.7381 2.87342 87.1555 3.25513ZM114.941 2.86125C114.405 2.952 113.544 2.98207 113.057 2.92702C112.598 2.87102 113.052 2.78309 114.075 2.74739C115.124 2.71075 115.503 2.76956 114.941 2.86125ZM55.814 5.17818C55.7627 5.25202 49.5516 5.577 41.994 5.91296C34.4646 6.28397 30.1586 6.39832 32.4417 6.21051C37.2488 5.79047 55.9679 4.95665 55.814 5.17818ZM69.2148 4.78226C69.1379 4.89303 68.897 4.93746 68.7049 4.8361C68.4859 4.73567 68.5629 4.6249 68.8588 4.61457C69.1535 4.56825 69.3187 4.67056 69.2148 4.78226ZM116.863 5.46C117.06 5.7053 116.283 5.80451 114.452 5.83241C112.97 5.81212 107.696 5.99627 102.747 6.20512C97.7982 6.41398 93.0618 6.54335 92.2521 6.49957C89.8488 6.33132 76.9066 6.74724 67.2274 7.26538C57.2804 7.82889 56.6553 7.67059 65.7326 6.88527C73.8695 6.16882 116.497 5.00446 116.863 5.46ZM51.902 8.08876C43.787 8.66034 35.4198 8.95253 37.3725 8.56011C38.1746 8.388 43.2019 8.10437 48.5289 7.91834C58.0274 7.62267 58.1081 7.61986 51.902 8.08876ZM87.427 7.17243C87.4332 7.35234 87.2474 7.43088 87.0284 7.33045C86.8082 7.19404 86.6148 7.05669 86.6123 6.98472C86.6098 6.91276 86.7956 6.83422 87.0108 6.8267C87.2261 6.81919 87.4194 6.95654 87.427 7.17243ZM88.2341 7.14424C88.2404 7.32415 88.1121 7.50876 87.9507 7.51439C87.8162 7.51909 87.7561 7.34106 87.8305 7.15833C87.9037 6.93963 88.0332 6.791 88.1139 6.78818C88.1677 6.7863 88.2265 6.92835 88.2341 7.14424ZM90.2519 7.07378C90.3389 7.25087 90.2376 7.43453 90.0223 7.44205C89.7802 7.45051 89.5856 7.27717 89.5793 7.09727C89.5717 6.88138 89.6743 6.73369 89.8089 6.72899C89.9703 6.72336 90.1636 6.86071 90.2519 7.07378ZM115.824 6.54105C116.318 6.81199 116.319 6.84798 115.699 6.8336C115.322 6.84676 114.672 6.72538 114.209 6.59742L113.392 6.33776L114.334 6.30487C114.845 6.28702 115.521 6.37148 115.824 6.54105ZM53.6027 8.96603C49.5696 9.17892 43.0319 9.40722 39.0744 9.47337C35.1183 9.57549 38.4262 9.42395 46.4168 9.14492C54.4074 8.86588 57.6371 8.78912 53.6027 8.96603ZM3.01039 11.9216C3.01667 12.1015 2.61939 12.2955 2.16076 12.2755C1.40744 12.3018 1.35112 12.2317 1.79969 11.9639C2.53794 11.5058 2.99531 11.4898 3.01039 11.9216ZM7.28062 11.5563C7.22933 11.6302 6.2658 11.8079 5.1665 11.9544C3.85321 12.1443 3.28697 12.1281 3.54847 11.9028C3.91382 11.5658 7.53836 11.2231 7.28062 11.5563ZM112.478 8.71133C112.077 8.79738 111.351 8.82275 110.864 8.7677C110.377 8.71264 110.698 8.62941 111.585 8.5984C112.473 8.5674 112.879 8.62527 112.478 8.71133Z"
                  fill="#FFD25D"
                ></path>
              </svg>
            </span>
          </span>
        </div>
        <div>
          <button className="bg-primary text-white font-semibold px-7 py-3 rounded-xl border-2 border-primary hover:bg-white hover:text-primary duration-300 ">
            See All Articles
            <span>
              <span className="inline-block pl-3 ">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.71533 1L13 5.28471L8.71533 9.56941"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1 5.28473H12.88"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className="education-wrapper grid grid-cols-3 gap-7">
        <div className="education-content overflow-hidden rounded-2xl border">
          <div className="w-full h-[250px] overflow-hidden group relative  ">
            <img
              src={img1}
              alt="education"
              className="rounded-t-2xl  h-full w-full transition-transform duration-300 group-hover:scale-110  object-cover"
            />
          </div>
          <div className="pl-7">
            <div className="education-content py-8">
              <span className="rounded-full bg-[#EFE9FE] px-5 py-1 text-[14px] font-semibold">
                Education
              </span>
              <span className="border-t-2 inline-block mx-4 w-7 pb-1"></span>
              <span className="content-center text-center text-gray-500  text-sm ">
                August 24, 2024
              </span>
            </div>
            <h1 className="text-[24px] pb-7 hover:text-primary duration-300 ">
              A better alternative to grading <br /> Student writing.
            </h1>
            <div className="flex mb-8">
              <div>
                <img src={user1} width={40} alt="user" />
              </div>
              <div className="content-center text-gray-600 text-[15px] pl-4  ">
                <span> Arlene McCoy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="education-content overflow-hidden rounded-2xl border">
          <div className="w-full h-[250px] overflow-hidden group relative  ">
            <img
              src={img1}
              alt="education"
              className="rounded-t-2xl  h-full w-full transition-transform duration-300 group-hover:scale-110  object-cover"
            />
          </div>
          <div className="pl-7">
            <div className="education-content py-8">
              <span className="rounded-full bg-[#EFE9FE] px-5 py-1 text-[14px] font-semibold">
                Education
              </span>
              <span className="border-t-2 inline-block mx-4 w-7 pb-1"></span>
              <span className="content-center text-center text-gray-500  text-sm ">
                August 24, 2024
              </span>
            </div>
            <h1 className="text-[24px] pb-7 hover:text-primary duration-300">
              A better alternative to grading <br /> Student writing.
            </h1>
            <div className="flex mb-8">
              <div>
                <img src={user1} width={40} alt="user" />
              </div>
              <div className="content-center text-gray-600 text-[15px] pl-4  ">
                <span> Arlene McCoy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="education-content overflow-hidden rounded-2xl border">
          <div className="w-full h-[250px] overflow-hidden group relative  ">
            <img
              src={img1}
              alt="education"
              className="rounded-t-2xl  h-full w-full transition-transform duration-300 group-hover:scale-110  object-cover"
            />
          </div>
          <div className="pl-7">
            <div className="education-content py-8">
              <span className="rounded-full bg-[#EFE9FE] px-5 py-1 text-[14px] font-semibold">
                Education
              </span>
              <span className="border-t-2 inline-block mx-4 w-7 pb-1"></span>
              <span className="content-center text-center text-gray-500  text-sm ">
                August 24, 2024
              </span>
            </div>
            <h1 className="text-[24px] pb-7 hover:text-primary duration-300">
              A better alternative to grading <br /> Student writing.
            </h1>
            <div className="flex mb-8">
              <div>
                <img src={user1} width={40} alt="user" />
              </div>
              <div className="content-center text-gray-600 text-[15px] pl-4  ">
                <span> Arlene McCoy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPost;

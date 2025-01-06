import React from "react";
import queto from "../../assets/images/queto.png";
import user from "../../assets/images/test-2-avatar-4.png";


const Testimonials = () => {
  return (
    <>
      <div className="bg-[#F8F8FA] py-32">
        <div className="text-center">
          <p className="text-primary font-semibold">Testimonials</p>
          <h2 className="text-[40px] font-semibold">
            People Say About
            <span className="text-primary relative pr-8 pl-3">
              Acadia
              <svg
                className="tp-underline-shape-9 wow bounceIn absolute right-0 top-10"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                xmlns="http://www.w3.org/2000/svg"
                width="161"
                height="19"
                viewBox="0 0 161 19"
                fill="none"
              >
                <path
                  d="M90.1361 2.60246C87.2358 2.89362 75.9758 3.66658 65.1734 4.32862C36.9444 6.02644 25.0546 7.05873 15.4502 8.48591C7.96449 9.60176 0.882022 11.0833 0.51028 11.6184C0.442691 11.7157 0.413181 12.9035 0.424088 14.2322C0.427691 16.3682 0.547287 16.7438 1.35368 17.4751C1.86655 17.9319 2.55666 18.3825 2.84523 18.5148C3.34981 18.7345 22.5142 16.6412 27.0658 15.8652C29.0782 15.5576 91.2571 12.3419 106.428 11.7647C111.888 11.574 124.589 11.4153 134.634 11.4442C144.68 11.4732 153.764 11.3933 154.79 11.31C157.339 11.1261 159.55 9.38745 159.593 7.58211C159.591 6.49042 159.478 6.30449 158.661 6.28555C157.773 6.26909 157.771 6.22168 158.859 5.85142C160.366 5.32408 160.534 5.03342 159.624 4.40062C158.752 3.81398 158.582 3.01295 159.362 2.98571C159.646 2.97581 159.885 2.73009 159.877 2.49303C159.867 2.20856 159.683 2.02511 159.435 2.03378C159.222 2.0412 158.284 1.59928 157.378 1.06129L155.711 0.0751953L125.576 1.08004C109.02 1.61076 93.0719 2.31007 90.1361 2.60246ZM114.663 3.64472C114.882 3.82694 117.016 3.94231 119.462 3.85689C121.91 3.81888 126.525 3.84759 129.759 3.97199C134.913 4.17178 134.347 4.23899 125.159 4.36998C119.413 4.47571 110.015 4.70894 104.272 4.90949C98.5292 5.11004 93.9173 5.17615 93.9849 5.07885C94.0863 4.9329 98.0163 4.65326 102.73 4.4412C107.441 4.18173 111.476 3.85096 111.716 3.60524C112.233 3.15997 114.113 3.14177 114.663 3.64472ZM151.274 3.12573C150.569 3.24531 149.434 3.28493 148.793 3.21239C148.187 3.13861 148.786 3.02274 150.133 2.9757C151.516 2.92742 152.015 3.00491 151.274 3.12573ZM73.3661 6.17863C73.2985 6.27593 65.1144 6.70413 55.1562 7.14682C45.2351 7.63567 39.5613 7.78634 42.5697 7.53888C48.9037 6.98541 73.5688 5.88674 73.3661 6.17863ZM91.0236 5.65695C90.9223 5.8029 90.6049 5.86145 90.3517 5.72788C90.0632 5.59555 90.1646 5.44961 90.5545 5.43599C90.9428 5.37496 91.1605 5.50977 91.0236 5.65695ZM153.807 6.54997C154.067 6.87318 153.042 7.00391 150.63 7.04068C148.677 7.01394 141.729 7.25658 135.208 7.53178C128.686 7.80697 122.445 7.97744 121.379 7.91975C118.212 7.69806 101.159 8.2461 88.4049 8.92882C75.2982 9.67133 74.4746 9.46274 86.4352 8.42797C97.1568 7.48394 153.325 5.94972 153.807 6.54997ZM68.2114 10.0137C57.5187 10.7669 46.4936 11.1519 49.0666 10.6348C50.1235 10.408 56.7477 10.0343 63.7669 9.78919C76.2825 9.39961 76.3889 9.39589 68.2114 10.0137ZM115.021 8.80634C115.029 9.0434 114.784 9.14689 114.496 9.01456C114.205 8.83481 113.951 8.65384 113.947 8.55901C113.944 8.46419 114.189 8.3607 114.472 8.3508C114.756 8.3409 115.011 8.52187 115.021 8.80634ZM116.084 8.7692C116.093 9.00626 115.924 9.2495 115.711 9.25693C115.534 9.26312 115.454 9.02854 115.553 8.78777C115.649 8.49959 115.82 8.30376 115.926 8.30004C115.997 8.29757 116.074 8.48474 116.084 8.7692ZM118.743 8.67636C118.858 8.9097 118.724 9.15171 118.441 9.16161C118.122 9.17275 117.865 8.94436 117.857 8.7073C117.847 8.42284 117.982 8.22824 118.159 8.22205C118.372 8.21463 118.627 8.3956 118.743 8.67636ZM152.437 7.97441C153.089 8.33142 153.09 8.37883 152.273 8.35989C151.777 8.37722 150.92 8.21729 150.31 8.04869L149.234 7.70654L150.474 7.66321C151.148 7.63969 152.039 7.75097 152.437 7.97441ZM70.4524 11.1697C65.1382 11.4502 56.5237 11.751 51.3092 11.8382C46.0964 11.9727 50.4551 11.7731 60.9839 11.4054C71.5126 11.0377 75.7683 10.9366 70.4524 11.1697ZM3.78953 15.0641C3.79781 15.3011 3.27433 15.5567 2.67002 15.5304C1.67741 15.565 1.6032 15.4727 2.19427 15.1198C3.16701 14.5162 3.76966 14.4951 3.78953 15.0641ZM9.4162 14.5828C9.34861 14.6801 8.07902 14.9143 6.63053 15.1073C4.90008 15.3576 4.15397 15.3362 4.49854 15.0393C4.97994 14.5953 9.7558 14.1437 9.4162 14.5828ZM148.03 10.8341C147.501 10.9475 146.544 10.9809 145.903 10.9083C145.261 10.8358 145.683 10.7261 146.853 10.6853C148.023 10.6444 148.558 10.7207 148.03 10.8341Z"
                  fill="#FFD25D"
                ></path>
              </svg>
            </span>
          </h2>
        </div>
        <div className="testimonials-wrapper   overflow-hidden animate-marquee py-14 flex items-start gap-10">
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
          <div className="testimonials-content w-[25%] p-10 rounded-2xl  bg-white ">
            <div className="flex  justify-end">
              <img src={queto} alt="queto" />
            </div>
            <h3 className="text-[18px] text-primary font-semibold">
              Great quality!
            </h3>
            <p className="text-secondary font-medium text-opacity-90 py-7 text-[16px]">
              I wanted to place a review since their support helped me within a
              day or so, which is nice! Thanks and 5 stars!
            </p>
            <div className="flex items-center">
              <div className="user img">
                <img src={user} width={60} alt="user" />
              </div>
              <div className="pl-4">
                <b>
                  <p className="text-[17px]">Hilary Ouse</p>
                </b>
                <p className="text-[15px] text-gray-500 ">Design, Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

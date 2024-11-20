import React, { useState } from "react";

const Faq = () => {
  const [isFaqOpen1, setIsFaqOpen1] = useState(false);
  const toggleFaq1 = () => {
    setIsFaqOpen1(!isFaqOpen1);
  };
  const [isFaqOpen2, setIsFaqOpen2] = useState(false);
  const toggleFaq2 = () => {
    setIsFaqOpen2(!isFaqOpen2);
  };
  const [isFaqOpen3, setIsFaqOpen3] = useState(false);
  const toggleFaq3 = () => {
    setIsFaqOpen3(!isFaqOpen3);
  };
  const [isFaqOpen4, setIsFaqOpen4] = useState(false);
  const toggleFaq4 = () => {
    setIsFaqOpen4(!isFaqOpen4);
  };
  const [isFaqOpen5, setIsFaqOpen5] = useState(false);
  const toggleFaq5 = () => {
    setIsFaqOpen5(!isFaqOpen5);
  };
  const [isFaqOpen6, setIsFaqOpen6] = useState(false);
  const toggleFaq6 = () => {
    setIsFaqOpen6(!isFaqOpen6);
  };

  return (
    <section class="relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span class="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                Any Questions? Answered
              </h2>
              {/* <p class="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>

        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2">
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button
                onClick={toggleFaq1}
                class="faq-btn flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    Why is Emotional Intelligence important in workplace?
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen1 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  Emotional Intelligence is crucial in the workplace for several
                  reasons. <br />
                  1. Effective communication <br /> 2. Team collaboration <br />{" "}
                  3. Leadership effectiveness <br /> 4. Decision making <br />{" "}
                  5. Stress management <br /> 6. Customer relations <br /> 7.
                  Job satisfaction <br /> 8. Adaptability and innovation <br />
                  Emotional intelligence is critical factor in interpersonal
                  relationships, leaderships, decision making and overall
                  workplace dynamics. It contributes to a positive and
                  collaborative work culture enhances.
                </p>
              </div>
            </div>
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button
                onClick={toggleFaq2}
                class="faq-btn  flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    How can Emotional Intelligence benefit individuals
                    personally?
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen2 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  I will help you to improve self awareness, better emotional
                  regulation, stronger relationships, effective communication,
                  and enhanced overall well being. Developing Emotional
                  Intelligence can positively impact various aspects of an
                  individual's life, contributing to personal and professional
                  success.
                </p>
              </div>
            </div>
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button
                onClick={toggleFaq3}
                class="faq-btn flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    Do you offer individual or group coaching sessions?
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen3 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  Yes we offer individual and group coaching sessions.
                </p>
              </div>
            </div>
            {/* next */}
          </div>
          <div class="w-full px-4 lg:w-1/2">
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button
                onClick={toggleFaq4}
                class="faq-btn flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    Are your services available online or in person??
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen4 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  Our services are available in online as well as offline mode.
                </p>
              </div>
            </div>
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button
                onClick={toggleFaq5}
                class="faq-btn flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    How can I get started with your Emotional Intelligence
                    coaching?
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen5 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  You can get started by clicking on the 'Register' button at
                  the top right of the website and filling in the details.
                </p>
              </div>
            </div>
            {/* next */}
            <div
              class="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button
                onClick={toggleFaq6}
                class="faq-btn flex w-full items-center text-left"
              >
                <div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    class="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <h4 class="text-base font-semibold text-black sm:text-lg">
                    What services do you offer to enhance Emotional
                    Intelligence?
                  </h4>
                </div>
              </button>
              <div className={`faq-content ${isFaqOpen6 ? "" : "hidden"}`}>
                <p class="py-3 text-base leading-relaxed text-body-color">
                  1. One-on-one coaching <br />
                  2. 20 days training with study kit. <br />
                  3. Psychometric Testing.
                </p>
              </div>
            </div>
            {/* next */}
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4B0082" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Faq;

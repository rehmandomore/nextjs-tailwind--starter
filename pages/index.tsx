import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jami Connect</title>
        <meta name="description" content="Jami-Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* About Section */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="flex flex-col h-full justify-center items-center  bg-white p-10 rounded-lg border-[1px] border-gray-200 -mt-24 container mx-auto"
          >
            <h4 className="font-bold">What they say about us</h4>
            <div className="flex md:flex-row gap-5 flex-col md:divide-x-2 md:divide-y-0 divide-y-2 items-center justify-evenly w-full mt-10">
              <div className="flex flex-col items-center p-5 ">
                <img
                  className="w-32"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61645817bf415dc3db1c064f_logo-1-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg text-center">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center flex-col text-center p-5">
                <img
                  className="w-36 mb-4"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61645817fbac6f761fc13305_logo-2-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center text-center p-5">
                <img
                  className="w-32 mb-4"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/616458166116ff44c1bbb5fa_logo-3-marketing-template.svg"
                  alt=""
                />
                <p className="mt-2 text-secondary text-lg">
                  "“Lorem ipsum dolor sit amet consectetur adipiscing elit
                  cursus pellentesque morbi.”"
                </p>
                <img
                  className="mt-3"
                  src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164aa8cc5852e62f512f99d_icon-stars-marketing-template.svg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <div className="bg-[#F8F9FF] h-full pb-32">
            <div className="  container mx-auto pt-32">
              <div className="flex justify-between lg:flex-row flex-col items-center w-full">
                <div className="lg:text-left text-center">
                  <p className="text-primary text-lg">Our Services</p>
                  <h3 className="text-4xl font-bold">
                    High impact marketing <br /> services to grow your startup
                  </h3>
                </div>
                <div className="flex  flex-row gap-5 mt-10 ">
                  <button className="primary_button">Get in touch</button>
                  <button className="primary_hover">Browse Services</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 mt-16">
                {/* Card 1 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-2xl shadow-xl hover:scale-105 duration-500  flex flex-col lg:flex-row  p-10 gap-7"
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615c3a270be053ba8e59_icon-1-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Email Marketing</h3>
                    <p className="text-secondary mt-2 ">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-2xl shadow-xl flex h-full  hover:scale-105 duration-500   p-10 gap-7 flex-col lg:flex-row "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615cfbac6f4377c188bf_icon-2-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Paid Advertising</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 3 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-xl shadow-xl flex h-full p-10 gap-7 flex-col lg:flex-row hover:scale-105 duration-500  "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615c3a270b2f83ba8e5a_icon-3-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">SEO</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
                {/* Card 4 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.1 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className="bg-white rounded-xl shadow-xl flex h-full p-10 gap-7 flex-col lg:flex-row hover:scale-105 duration-500  "
                >
                  <img
                    className="rounded-2xl w-20 h-20"
                    src="https://assets.website-files.com/6160c9819f1e5978b56545d6/6164615cf6dc04668c4e2aa8_icon-6-services-marketing-template.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Funnel Optimization</h3>
                    <p className="text-secondary mt-2">
                      Lorem ipsum dolor sit amet dolor sit consectet adipiscing
                      elit faucibus elit fermentum dolor drakomg adipiscing
                      facilis
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 Cards */}
        <div className="flex flex-col items-center justify-center container mx-auto pt-20 pb-20">
          <p className="text-primary text-lg">OUR PROCESS</p>
          <h1 className="font-bold text-center mt-3">
            A simple, yet effective <br /> three step process
          </h1>
          {/* Card 1 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-center mt-16 gap-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">1.Discovery</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd5a180126fb99edd41_image-1--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">2.Planning</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd6899d6fec81531a8e_image-2--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
            {/* Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="process_cards"
            >
              <h2 className="font-semibold mt-5">3.Execution</h2>
              <p className="text-secondary text-lg mt-2">
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit
                faucibus elit fermentum adipiscing facilis
              </p>
              <img
                className="mt-16"
                src="https://assets.website-files.com/6160c9819f1e5978b56545d6/61689fd69652ec157975dcd9_image-3--process-v3-marketing-template.svg"
                alt=""
              />
            </motion.div>
          </div>
          <button className="primary_hover mt-20">Get in touch</button>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

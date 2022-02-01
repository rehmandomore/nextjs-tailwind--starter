import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiHome, BiBuildings } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsFiles } from "react-icons/bs";

type Props = {
  name?: string;
};

const Navbar = ({ name }: Props) => {
  return (
    <div>
      <nav className="w-full border-b-2 h-20 flex md:justify-evenly justify-between md:p-0 p-10  items-center ">
        {/* Navbar Brands */}
        <div>
          <h1 className="text-2xl">JAMI PARTNERS</h1>
        </div>
        {/* Navlinks */}
        <div className="flex items-center ">
          <ul className="lg:flex hidden gap-10">
            <li>
              <Link href={""}>
                <a className="text-Secondary font-[600]">Home</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className="text-Secondary font-[600]">Company</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className="text-Secondary font-[600]">Clients</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className="text-Secondary font-[600]">Resources</a>
              </Link>
            </li>
          </ul>
          <button className="text-white rounded-md lg:block hidden bg-primary p-3 font-[700] ml-10">
            Get in touch
          </button>
        </div>
        {/* Navbar Dropdown */}
        <div className="text-right lg:hidden block">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-white duration-500 p-2 px-3 py-2  bg-primary rounded-lg hover:bg-gray-200 hover:text-primary">
                <HiMenuAlt3 className="text-3xl" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute  right-0 w-56 mt-2 origin-top-right bg-white  rounded-md shadow-lg">
                <div className="w-full ">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="dropdown_hover group">
                        {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                        <BiHome className="dropdown_icons" /> Home
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="dropdown_hover group">
                        {/* {active ? (
                      <DuplicateActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                        <BiBuildings className="dropdown_icons" /> Company
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <button className="dropdown_hover group">
                        {/* {active ? (
                      <ArchiveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                        <FiUsers className="dropdown_icons" /> Clients
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="dropdown_hover group">
                        {/* {active ? (
                      <MoveActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                        <BsFiles className="dropdown_icons text-primary" />
                        Resources
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

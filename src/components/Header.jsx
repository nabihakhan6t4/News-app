"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#F5F5F5]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NewsHub</span>
            <span className="text-[#D71920]">NewsHub</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#333333]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/business"
            className="text-sm/6 font-semibold text-[#333333]"
          >
            Business
          </Link>
          <Link
            to="/entertainment"
            className="text-sm/6 font-semibold text-[#333333]"
          >
            Entertainment
          </Link>
         
          <Link to="/health" className="text-sm/6 font-semibold text-[#333333]">
            Health
          </Link>
          <Link
            to="/science"
            className="text-sm/6 font-semibold text-[#333333]"
          >
            Science
          </Link>
          <Link to="/sports" className="text-sm/6 font-semibold text-[#333333]">
            Sports
          </Link>

          <Link
            to="/technology"
            className="text-sm/6 font-semibold text-[#333333]"
          >
            Technology
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm/6 font-semibold text-[#333333]">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#FFFFFF] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#1A1A1A]/10">
          <div className="flex items-center justify-between">
            <a to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Breaking News</span>
              <span className="text-[#D71920]">NewsHub</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#333333]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#1A1A1A]/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/business"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Business
                </Link>
                <Link
                  to="/entertainment"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Entertainment
                </Link>

               
                <Link
                  to="/health"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Health
                </Link>
                <Link
                  to="/science"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Science
                </Link>
                <Link
                  to="/sports"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Sports
                </Link>

                <Link
                  to="/technology"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Technology
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

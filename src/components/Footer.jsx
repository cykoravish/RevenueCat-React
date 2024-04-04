import React from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Customers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Documentation
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Quickstart Guide
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    System Status
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    SDKs
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sample Apps
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Migration Guide
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    View All Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Why RevenueCat?
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Integration
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    For Engineering Teams
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    For Marketing Teams
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    For Product Teams
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Apple Receipt Checker
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Poilicy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms and Condition
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    GDPR
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Fair Billing Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faGithub} className="size-7 mr-4" />
          <FontAwesomeIcon icon={faTwitter} className="size-7" />
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 block">
            © 2022
            <a href="#" className="hover:underline">
              RevenueCat
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}

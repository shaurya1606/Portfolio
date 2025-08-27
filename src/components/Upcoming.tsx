import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import upcoming_data from "@/data/upcoming_data.json";

function Upcoming() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={upcoming_data.projects} />
          </div>
        </div>
        <div className="text-center mt-20">
          <Link
            href="/courses"
            className="inline-block bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;

"use client";
import { serviceData, serviceDataMain } from "@/components/data/services";
import React from "react";
import AccordianSingle from "./accordianSingle";

const ServiceAccordian = () => {
  return (
    <div className="my-10">
      {Object.keys(serviceDataMain).map((service, index) => {
        console.log(service,"service")
        return (
          <AccordianSingle service={service} key={index} id={index} section={undefined}  />
        );
      })}
    </div>
  );
};

export default ServiceAccordian;

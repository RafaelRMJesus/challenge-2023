import { Separator } from "@/components/ui/separator";
import CardEvent from "./components/event-card";
import { Tweet } from "react-tweet"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import EventTable from "./components/event-table";
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function EventsPage() {
  return (
    <div className="flex py-8 px-40 gap-x-8">
      <CardEvent 
        title='Eventos'
        separator={<Separator />}
        content={<EventTable /> }   
      />
      <div className="w-2/4 ">
        <div className="flex justify-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none">Eventos em Alta!</h1>
        </div>
        <div className="flex justify-center items-center gap-x-6">
          <div className="rounded-full bg-muted p-3">
            <ArrowLeft />
          </div>
            <Tweet 
                id="1688550811654029312"
              />
          <div className="rounded-full bg-muted p-3">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}
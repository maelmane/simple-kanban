"use client";
import React, { useEffect, useState } from "react";
import { Board } from "@/components/Board";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
}

import React from "react";
import Plp from "../components/Plp";
import MainLayout from "../layout/MainLayout";

import LatestSlider from "../components/LatestSlider";

export default function PlpPage() {
  return (
    <>
      <MainLayout>
        <Plp></Plp>
        <LatestSlider></LatestSlider>
      </MainLayout>
    </>
  );
}

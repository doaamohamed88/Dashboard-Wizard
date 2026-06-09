import React from "react";
import RegistryActivity from "./components/RegistryActivity";
import WizardsSpecialty from "./components/WizardsSpecialty";
import MasterWizardRegistry from "./components/Table";
import CardList from "./components/CardList";
export default function Dashboard() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 ">
        <h1 className="font-bold tracking-[-1px] leading-12 text-3xl sm:text-4xl md:text-[40px] text-foreground">
          Wizarding Registry Dashboard
        </h1>
        <p className="text-[16px] sm:text-[18px] leading-7 tracking-normal text-[#CBC3D7]  ">
          Overseeing the mystical equilibrium across all magical realms.
        </p>
      </div>
      <CardList/>
      <div className="grid grid-cols-1  md:grid-cols-[2fr_1fr] gap-6 px-4 sm:px-6 lg:px-10  ">
        <RegistryActivity />
        <WizardsSpecialty />
      </div>
      <MasterWizardRegistry></MasterWizardRegistry>
    </>
  );
}

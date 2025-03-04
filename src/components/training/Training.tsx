import Navbar from "../navbar/Navbar"
import { Partners } from "./Partners"
import PricingSection from "./PricingSection"
import { ProcessSteps } from "./ProcessSteps"
import { ProgramPage } from "./ProgramPage"
import { Testimonial } from "./Testimonial"
import { Testimonial2 } from "./Testimonial2"
import { Topics } from "./Topics"
import { TrainingFormats } from "./TrainingFormats"



const Training = () => {
  return (
    <>
      <section>
        <Navbar />
        <Topics />
        <Testimonial />
        <Partners />
        <ProcessSteps />
        <TrainingFormats />
        <ProgramPage />
        <PricingSection />
        <Testimonial2 />
        <Partners />
      </section>
    </>
  )
}

export default Training
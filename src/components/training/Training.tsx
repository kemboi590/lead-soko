import Navbar from "../navbar/Navbar"
import { Partners } from "./Partners"
import { ProcessSteps } from "./ProcessSteps"
import { ProgramPage } from "./ProgramPage"
import { Testimonial } from "./Testimonial"
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
      </section>
    </>
  )
}

export default Training
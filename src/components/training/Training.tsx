import Navbar from "../navbar/Navbar"
import { Partners } from "./Partners"
import { ProcessSteps } from "./ProcessSteps"
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
      </section>
    </>
  )
}

export default Training
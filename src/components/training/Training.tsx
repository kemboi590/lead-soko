import Navbar from "../navbar/Navbar"
import { Partners } from "./Partners"
import { ProcessSteps } from "./ProcessSteps"
import { Testimonial } from "./Testimonial"
import { Topics } from "./Topics"



const Training = () => {
  return (
    <>
      <section>
        <Navbar />
        <Topics />
        <Testimonial />
        <Partners />
        <ProcessSteps />
      </section>
    </>
  )
}

export default Training
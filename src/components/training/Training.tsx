import Navbar from "../navbar/Navbar"
import { MultiStepForm } from "./BusinessForm"
import { GetStartedSection } from "./GetStartedSection"
import { MasterySection } from "./MasterySection"
import { Partners } from "./Partners"
import PricingSection from "./PricingSection"
import { ProcessSteps } from "./ProcessSteps"
import { ProgramPage } from "./ProgramPage"
import { SuccessStory } from "./SuccessStory"
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
        <MasterySection />
        <SuccessStory />
        <Partners />
        <GetStartedSection />
        <MultiStepForm />

      </section>
    </>
  )
}

export default Training
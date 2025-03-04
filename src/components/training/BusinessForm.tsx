import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website: string;
    industry: string;
    role: string;
    department: string;
    challenge: string;
    heardAbout: string;
};

export const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
        industry: "",
        role: "",
        department: "",
        challenge: "",
        heardAbout: "",
    });
    const [submitted, setSubmitted] = useState(false);

    // Handle form navigation
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        setSubmitted(true);
    };

    return (
        <section className="md:max-w-[80%] mx-auto bg-white p-8 md:px-22 rounded-lg shadow-md mt-8">
            {/* Step Progress */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                {["Basic Info", "Reserve Meeting", "Confirmation"].map((title, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= index + 1 ? "bg-blue-600 text-white" : "bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </div>
                        <span className={`text-sm font-medium ${step >= index + 1 ? "text-blue-600" : "text-gray-400"}`}>{title}</span>
                    </div>
                ))}
            </div>

            {/* Success Message */}
            {submitted ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-600">🎉 Submission Successful!</h2>
                    <p className="text-gray-600 mt-2">Your details have been recorded.</p>
                    <button onClick={() => { setStep(1); setSubmitted(false); }} className="btn btn-primary mt-6">
                        Start Over
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {/* Step 1 - Basic Info */}
                    {step === 1 && (
                        <>
                            <h2 className="text-xl font-bold text-gray-900">Fill out this form to take ownership of your business growth.</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {[
                                    { label: "First Name", name: "firstName", type: "text" },
                                    { label: "Last Name", name: "lastName", type: "text" },
                                    { label: "Company Email", name: "email", type: "email" },
                                    { label: "Phone Number", name: "phone", type: "text" },
                                    { label: "Company Website", name: "website", type: "url" },
                                ].map(({ label, name, type }) => (
                                    <div key={name}>
                                        <label className="label font-medium">{label}<span className="text-red-500">*</span></label>
                                        <input type={type} name={name} value={formData[name as keyof FormData]} onChange={handleChange} className="input input-bordered w-full" required />
                                    </div>
                                ))}

                                {/* Dropdowns */}
                                {[
                                    { label: "Industry", name: "industry", options: ["Technology", "Finance", "Healthcare"] },
                                    { label: "Role", name: "role", options: ["Manager", "CEO", "Marketing Lead"] },
                                    { label: "Department", name: "department", options: ["Sales", "Marketing", "IT"] },
                                ].map(({ label, name, options }) => (
                                    <div key={name}>
                                        <label className="label font-medium">{label}<span className="text-red-500">*</span></label>
                                        <select name={name} value={formData[name as keyof FormData]} onChange={handleChange} className="select select-bordered w-full" required>
                                            <option disabled value="">Please Select</option>
                                            {options.map((option) => <option key={option} value={option}>{option}</option>)}
                                        </select>
                                    </div>
                                ))}

                                {/* Textareas */}
                                <div className="col-span-1 md:col-span-2">
                                    <label className="label font-medium">What is your biggest sales and marketing challenge?<span className="text-red-500">*</span></label>
                                    <textarea name="challenge" value={formData.challenge} onChange={handleChange} className="textarea textarea-bordered w-full" rows={4} required></textarea>
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="label font-medium">How did you hear about us?<span className="text-red-500">*</span></label>
                                    <input type="text" name="heardAbout" value={formData.heardAbout} onChange={handleChange} className="input input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button type="button" onClick={nextStep} className="btn btn-primary w-full md:w-auto px-8">Continue 
                                    <FaArrowRight className="ml-2" />
                                </button>
                            </div>
                        </>
                    )}

                    {/* Step 2 - Reserve Meeting */}
                    {step === 2 && (
                        <>
                            <h2 className="text-xl font-bold text-gray-900">Reserve Your Meeting</h2>
                            <p className="text-gray-600">Please select a date and time for your meeting.</p>

                            <div className="mt-6 flex justify-between">
                                <button type="button" onClick={prevStep} className="btn btn-secondary">Back</button>
                                <button type="button" onClick={nextStep} className="btn btn-primary">Continue</button>
                            </div>
                        </>
                    )}

                    {/* Step 3 - Confirmation */}
                    {step === 3 && (
                        <>
                            <h2 className="text-xl font-bold text-gray-900">Confirmation</h2>
                            <p className="text-gray-600">Thank you! Your meeting has been reserved.</p>

                            <button type="submit" className="btn btn-primary mt-6">Submit</button>
                        </>
                    )}
                </form>
            )}
        </section>
    );
};

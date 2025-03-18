"use clinet"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  service: Yup.string().required("Service selection is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  topic: Yup.string().required("Topic is required"),
});

const ConsultingForm = ({setShowModal}) => {

  const handleSubmit = async(values, { setSubmitting }) => {
    const {name, email, service, date, time, topic} = values;

    const formData = {
        name,
        email,
        service,
        date,
        time,
        topic
    }

    await axios.post("https://ims-apppppointment-b8549696e409.herokuapp.com/appointments/", formData);
    setSubmitting(false);
    setShowModal(false);
  };

  return (  
        <div
          className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-center font-bold mb-4 text-blueSecondary">Book Your Free Consultation</h2>
            <Formik
              initialValues={{ name: "", email: "", service: "", date: "", time: "", topic: "" }}
              validationSchema={formSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field name="service" as="select" className="w-full p-2 border border-gray-300 rounded">
                      <option value="">Select a Service</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Development">Development</option>
                      <option value="Design">Design</option>
                    </Field>
                    <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field name="date" type="date" className="w-full p-2 border border-gray-300 rounded" />
                    <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field name="time" type="time" className="w-full p-2 border border-gray-300 rounded" />
                    <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field name="topic" as="select" className="w-full p-2 border border-gray-300 rounded">
                      <option value="">Select a Topic</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Finance">Finance</option>
                    </Field>
                    <ErrorMessage name="topic" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blueSecondary text-white py-2 px-4 rounded-lg shadow hover:bg-opacity-80 transition duration-200"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
  );
}

export default ConsultingForm;

import * as Yup from "yup";

export const validationTestingSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .max(10, "must be less than 10 characters"),
  email: Yup.string().email().required("email is required"),
  status: Yup.string().required("status is required"),
  country: Yup.string().required("country is required"),
  city: Yup.string().when("country", ([country], schema) => {
    return country === "india"
      ? schema.required("city is required")
      : schema.notRequired();
  }),
  residence: Yup.string().when("country", ([country], schema) => {
    return country === "america"
      ? schema.required("residence is required")
      : schema.notRequired();
  }),
});

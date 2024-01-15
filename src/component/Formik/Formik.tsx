import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { validationTestingSchema } from "./ValidationSchema";

interface FormikFormValues {
  username: string;
  name: string;
  email: string;
  status: string;
  country?: string;
  city?: string;
  residence?: string;
}

const Formik = () => {
  const onSubmitFunc = (values: FormikFormValues) => {
    // Filter out fields based on conditions

    // const filterValues = Object.entries(values).reduce((acc, [key, value]) => {
    //   if (value !== "") {
    //     acc[key] = value;
    //   }
    //   return acc;
    // });

    // const filterValues = Object.entries(values).reduce((acc, [key, value]) => {
    //   if (value !== undefined && value !== null && value !== "") {
    //     return { ...acc, [key]: value };
    //   }
    //   return acc;
    // });

    // Now you can submit filteredValues

    const filterValues: FormikFormValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== null) {
          acc[key as keyof FormikFormValues] = value;
        }
        return acc;
      },
      {} as FormikFormValues,
    );

    console.log(filterValues);
  };

  const formik = useFormik<FormikFormValues>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: "",
      city: "",
      residence: "",
    },
    validationSchema: validationTestingSchema,
    // onSubmit: (values) => {
    //   console.log("hello", values);
    // },
    onSubmit: onSubmitFunc,
  });

  return (
    <div
      className=""
      style={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="username"
        />
        {formik.errors.username && (
          <span style={{ color: "red" }}>{formik.errors.username}</span>
        )}
        <br />
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="name"
        />
        <br />

        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
        <br />

        <span>Status:</span>
        <input
          type="radio"
          name="status"
          value="single"
          onChange={formik.handleChange}
        />
        <label htmlFor="">single</label>
        <input
          type="radio"
          name="status"
          value="commited"
          onChange={formik.handleChange}
        />
        <label htmlFor="">commited</label>

        {formik.touched.status && formik.errors.status && (
          <span style={{ color: "red" }}>{formik.errors.status}</span>
        )}

        <br />
        <select
          name="country"
          id=""
          onChange={(e) => {
            formik.setFieldValue("country", e.target.value);
            if (e.target.value === "india") {
              formik.setFieldValue("residence", "");
            } else {
              formik.setFieldValue("city", "");
            }
          }}
        >
          <option value="">Select Your Country</option>
          <option value="india">India</option>
          <option value="america">America</option>
        </select>
        {formik.errors.country && (
          <span style={{ color: "red" }}>{formik.errors.country}</span>
        )}
        <br />

        {formik.values.country === "india" && (
          <>
            <select name="city" id="" onChange={formik.handleChange}>
              <option value="">Select Your City</option>
              <option value="delhi">Delhi</option>
              <option value="gurgaon">Gurgaon</option>
            </select>
            {formik.errors.city && (
              <span style={{ color: "red" }}>{formik.errors.city}</span>
            )}
            <br />
          </>
        )}

        {formik.values.country === "america" && (
          <>
            <select name="residence" id="" onChange={formik.handleChange}>
              <option value="">Select Your Residence</option>
              <option value="building">Building</option>
              <option value="tower">Tower</option>
            </select>
            {formik.errors.residence && (
              <span style={{ color: "red" }}>{formik.errors.residence}</span>
            )}
            <br />
          </>
        )}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formik;

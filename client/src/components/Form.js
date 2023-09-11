// AddressValidationForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import AddressValidationSchema from "./validation";
// validation.js
import { z } from "zod";

const Form = () => {
  const AddressValidationSchema = z.object({
    street: z.string().nonempty("Street is required"),
    city: z.string().nonempty("City is required"),
    state: z.string().nonempty("State is required"),
    zip: z
      .string()
      .nonempty("Zip code is required")
      .regex(/^\d{5}(-\d{4})?$/, "Zip code is invalid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddressValidationSchema),
  });

  const onSubmit = (data) => {
    // Perform address validation or submit data
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="street">Street:</label>
        <input id="street" type="text" {...register("street")} />
        {errors.street && <p>{errors.street.message}</p>}
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input id="state" type="text" {...register("state")} />
        {errors.state && <p>{errors.state.message}</p>}
      </div>

      <div>
        <label htmlFor="zip">Zip:</label>
        <input id="zip" type="text" {...register("zip")} />
        {errors.zip && <p>{errors.zip.message}</p>}
      </div>

      <button type="submit">Validate Address</button>
    </form>
  );
};

export default Form;

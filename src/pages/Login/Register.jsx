import { Input, SelectLabel } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import AnimText from "@/components/ui/AnimText";
import Animated from "@/components/ui/Animated";
import { useUser } from "@/shop/users";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const UserType = createListCollection({
    items: [
      { label: "Collection Explorer", value: "user" },
      { label: "Collection Creator", value: "brand" },
    ],
  });
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { registation } = useUser();

  const onSubmit = async (data) => {
    const { success, message } = await registation(data);
    if (!success) {
      toaster.create({
        title: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: message,
        type: "success",
      });
    }
    if (success) {
      navigate("/login");
    }
  };
  const textclr = useColorModeValue("text-zinc-200", "text-gray-900");
  const selclr = useColorModeValue("bg-zinc-900", "bg-gray-200");
  const Selectclr = useColorModeValue("text-zinc-900", "text-gray-300");
  return (
    <div className="my-[15vh] gap-[10vh] text-center flex max-sm:flex-col ">
      <div className="  w-[40vw] max-sm:w-full flex justify-center ">
        {/* <img
          className="w-full rounded-xl"
          src="https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        /> */}
        <Animated />
      </div>
      <div className="flex flex-col space-y-2 w-[40vw] max-sm:w-full  justify-center">
        <div className="text-3xl mb-5 self-center">
          <AnimText text={["Hello", "Register", "Browse", "Buy", "SHOP.CO"]} />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 "
        >
          <Input
            placeholder="Name"
            {...register("name", { required: "Name is Required" })}
            className="border px-5 text-center w-[80vw] self-center rounded-2xl max-w-[400px]"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
          <Input
            placeholder="Email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Should be a valid email",
              },
            })}
            className="border px-5 text-center w-[80vw] self-center rounded-2xl max-w-[400px]"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            placeholder="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*(){}[\]:;"'<>,.?~`|\\=])(?!.*[_\-+/ *^])(?=.*[A-Za-z]).{5,}$/,
                message:
                  "Must be at least 5 characters long, with 1 special character, 1 digit, no spaces, underscores, or arithmetic symbols",
              },
            })}
            className="border px-5 text-center w-[80vw] self-center rounded-2xl max-w-[400px]"
          />

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <select
            className={`${
              (textclr, selclr)
            } w-[240px] rounded-xl p-2 self-center`}
            {...register("type", { required: "required bc" })}
          >
            <option className="hover:bg-zinc-700" value="user">
              Collection Purchaser
            </option>
            <option className="hover:bg-zinc-700" value="admin">
              Collection Seller
            </option>
          </select>
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}

          <Input
            type="submit"
            className="bg-zinc-900 text-center w-[80vw] self-center rounded-3xl lato text-xl max-w-[400px] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

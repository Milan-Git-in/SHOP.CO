import Animated from "@/components/ui/Animated";
import AnimText from "@/components/ui/AnimText";
import { useUser } from "@/shop/users";
import { Input } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { login, Userdetails } = useUser();
  const Log = async (data) => {
    const { email, password } = data;
    const { success, message, type } = await login(email, password);

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
      // console.log(Userdetails);
      if (type === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/user");
      }
    }
  };

  return (
    <div className="my-[15vh] gap-[10vh] text-center flex max-sm:flex-col ">
      <div className="  w-[40vw] max-sm:w-full flex justify-center ">
        <Animated />
      </div>
      <div className="flex flex-col space-y-2 w-[40vw] max-sm:w-full  justify-center">
        <div className="text-3xl mb-5 self-center ">
          <AnimText text={["Hello", "Login", "Browse", "Buy", "SHOP.CO"]} />
        </div>
        <form onSubmit={handleSubmit(Log)} className="flex flex-col gap-3">
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
            })}
            className="border px-5 text-center w-[80vw] self-center rounded-2xl max-w-[400px]"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Input
            type="submit"
            className="bg-zinc-900 text-center w-[80vw] self-center rounded-3xl lato text-xl max-w-[400px] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";
import { motion } from "framer-motion";

type Props = {
  close: () => void;
};

const inputStyle =
  "pb-0.5 w-full border-b-2 text-3xl font-medium placeholder-gray-light outline-none focus:border-b-2 focus:border-black";

const EmailForm = ({ close }: Props) => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <div className="fixed left-0 top-0 z-20 h-full w-full overflow-y-hidden overscroll-none bg-black bg-opacity-40">
      <motion.div
        className="fixed right-0 top-0 h-full w-11/12 bg-white p-4 opacity-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 1, x: "91%" },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mb-20 flex justify-end">
          <div
            className="cursor-pointer rounded-md bg-gray-light p-3 transition duration-200 hover:bg-green hover:text-white"
            onClick={close}
          >
            <XMarkIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="basis-1/3">
            <p className="text-3xl font-medium">
              Please fill in the form and a member of our team will get back to
              you with the relevant details.
            </p>
          </div>
          <div className="basis-3/5">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/d9e306cfafb9ad9d9d47d60168586d6c"
              method="POST"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="Name *"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name ? (
                <p className="mb-2 text-red-500">
                  {errors.name.type === "required" && "REQUIRED"}
                  {errors.name.type === "maxLength" && "MAX LENGTH"}
                </p>
              ) : (
                <div className="mb-8" />
              )}

              <input
                className={inputStyle}
                type="email"
                placeholder="Email *"
                {...register("email", {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors.email ? (
                <p className="mb-2 text-red-500">
                  {errors.email.type === "required" && "REQUIRED"}
                  {errors.email.type === "maxLength" && "MAX LENGTH"}
                </p>
              ) : (
                <div className="mb-8" />
              )}

              <input
                className={inputStyle}
                type="text"
                placeholder="Role *"
                {...register("role", {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors.role ? (
                <p className="mb-2 text-red-500">
                  {errors.role.type === "required" && "REQUIRED"}
                  {errors.role.type === "maxLength" && "MAX LENGTH"}
                </p>
              ) : (
                <div className="mb-8" />
              )}

              <textarea
                className={inputStyle}
                rows={3}
                placeholder="Message *"
                {...register("message", {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.message ? (
                <p className="mb-2 text-red-500">
                  {errors.message.type === "required" && "REQUIRED"}
                  {errors.message.type === "maxLength" && "MAX LENGTH"}
                </p>
              ) : (
                <div className="mb-8" />
              )}

              <div className="flex items-center justify-between">
                <div className="flex">
                  <div>
                    <input
                      className="mx-8 accent-black"
                      type="checkbox"
                      {...register("privacy_policy", {
                        required: true,
                      })}
                    />
                    {errors.privacy_policy ? (
                      <p className="mb-2 text-red-500">
                        {errors.privacy_policy.type === "required" &&
                          "REQUIRED"}
                      </p>
                    ) : (
                      <div className="mb-8" />
                    )}
                  </div>

                  <p className="mt-[2px] text-sm text-gray-medium">
                    I AGREE WITH THE COLUMBUS’S PRIVACY POLICY *
                  </p>
                </div>
                <ButtonArrowAnimated submit text="SEND REQUEST" isDark />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default EmailForm;

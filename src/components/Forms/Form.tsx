import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TInputProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const ZRFForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TInputProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    await onSubmit(data);
    // reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default ZRFForm;

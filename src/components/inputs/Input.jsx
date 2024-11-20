import { Input } from "@material-tailwind/react";

export function InputForDarkSurface() {
  return (
    <div className="w-72">
      <Input type="email" color="white" label="Email Address" />
    </div>
  );
}
import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
  );
}

import { Input, Typography } from "@material-tailwind/react";

export function InputWithHelperText() {
  return (
    <div className="w-[32rem]">
      <Input type="password" label="Password" />
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
    </div>
  );
}
import { Input } from "@material-tailwind/react";

export function InputValidations() {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input label="Input Error" error />
      <Input label="Input Success" success />
    </div>
  );
}
import { Input } from "@material-tailwind/react";

export function InputColors() {
  return (
    <div className="flex w-72 flex-col gap-6">
      <Input color="blue" label="Input Blue" />
      <Input color="purple" label="Input Purple" />
      <Input color="indigo" label="Input Indigo" />
      <Input color="teal" label="Input Teal" />
    </div>
  );
}
import { Input } from "@material-tailwind/react";

export function InputDefault() {
  return (
    <div className="w-72">
      <Input label="Username" />
    </div>
  );
}

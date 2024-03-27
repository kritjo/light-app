// Error components must be Client Components
"use client";

import type { ReactElement } from "react";
// eslint-disable-next-line no-duplicate-imports -- Required for the type
import { useEffect } from "react";

export interface ErrorProps {
  readonly error: Readonly<Error> & { readonly digest?: string };
  readonly reset: () => void;
}

export default function Error(props: ErrorProps): ReactElement {

  useEffect(() => {
    console.error(props.error);
  }, [props.error]);

  return (
    <div className="flex flex-col justify-around items-center min-h-[7rem]">
      <h2>Something went wrong!</h2>
      <p>
        {props.error.message.toString()}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            props.reset();
          }
        }
      >
        Try again
      </button>
    </div>
  );
}
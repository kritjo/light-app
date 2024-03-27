import type { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        Hello, light-app!
      </h1>
      <p>
        This is a light-app page. You can start editing this page by modifying <code>app/page.tsx</code>.
      </p>
    </div>
  );
}
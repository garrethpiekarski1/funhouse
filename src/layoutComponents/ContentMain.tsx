import { ReactNode } from "react";

export default function ContentMain({ children }: { children: ReactNode }) {
  return (
    <main role="main">
      <div className="container-fluid">{children}</div>
    </main>
  );
}

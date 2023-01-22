/// <reference types="vite/client" />

declare module "remote_app/*" {
  import { ComponentType } from "react";

  const Component: ComponentType<any>;
  export default Component;
}

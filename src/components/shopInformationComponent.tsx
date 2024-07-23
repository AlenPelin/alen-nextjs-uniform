"use client";

import { ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { useState } from "react";

type ShopInformationComponentProps = ComponentProps<{
  category: any;
  categoryName: string;
}>;

export function ShopInformationComponent({ context, component, slots }: ShopInformationComponentProps) {
const [debugMode, setDebugMode] = useState(false);
  return (
    <>
      <hr/>
      <h2>ShopInformationComponent</h2>
      Debug mode: <input type="checkbox" name="debug" onClick={x => setDebugMode(!debugMode)} />
      <pre>
        {!debugMode ? '' : JSON.stringify(component,null,2)}
      </pre>
        <p>
            Category Name (via reference field): {component.parameters?.category?.value?.entry?.fields?.name?.value}
        </p>
        <p>
            Category Name (via pattern): {component.parameters?.categoryName?.value}
        </p>
    </>
  );
}

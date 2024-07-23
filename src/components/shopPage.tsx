import { ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-next-rsc/component";

type ShopPageProps = ComponentProps<{
  name: string;
  description: string;
}>;

export function ShopPage({ context, component, slots }: ShopPageProps) {
  return (
    <>
      <UniformText
        context={context}
        component={component}
        parameterId="name"
        as="h1"
      />

      <UniformText
        context={context}
        component={component}
        parameterId="description"
        as="p"
      />

      <UniformSlot context={context} data={component} slot={slots.content} key="content" />
    </>
  );
}

import {
    UniformPlayground,
    UniformPlaygroundProps,
} from "@uniformdev/canvas-next-rsc";

import { resolveComponent } from "../../components";

export default function PlaygroundPage(props: {
    searchParams: UniformPlaygroundProps["searchParams"];
}) {
    return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}
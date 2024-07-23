import { 
    type ResolveComponentFunction, 
    type ComponentProps, 
    DefaultNotImplementedComponent 
} from '@uniformdev/canvas-next-rsc/component';

import { ShopPage } from './shopPage';
import { ShopInformationComponent } from './shopInformationComponent';

export const resolveComponent: ResolveComponentFunction = ({
    component
}) => {
    let componentType: React.ComponentType<ComponentProps<any>> | null = DefaultNotImplementedComponent;
    
   if (component.type === "shopPage") {
    componentType = ShopPage;
  }

  if (component.type === "shopInformationComponent") {
   componentType = ShopInformationComponent;
 }

    return {
        component: componentType,
    }
}

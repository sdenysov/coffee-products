/**
 * Applicable only for method that return Observable or Promise
 */
import {DependencyInjectorService} from '@@core/services/dependency-injector.service';
import {UiLockerReduxFacade} from '@@ui-locker/store/ui-locker-redux.facade';
import {finalize, Observable} from 'rxjs';


export function UiLocking(): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const uiLockerReduxFacade = DependencyInjectorService.injectOutsideAngular(UiLockerReduxFacade);
      uiLockerReduxFacade.incrementPendingRequests();
      const result = originalFunction.apply(this, args);
      if (result instanceof Observable) {
        return result.pipe(finalize(() => {
          uiLockerReduxFacade.decrementPendingRequests();
        }));
      } else if (result instanceof Promise) {
        const promiseResponseDecorator = (response: any) => {
          uiLockerReduxFacade.decrementPendingRequests();
          return response;
        };
        return result
          .then(promiseResponseDecorator)
          .catch(promiseResponseDecorator);
      }
      return result;
    };
    return descriptor;
  };
}

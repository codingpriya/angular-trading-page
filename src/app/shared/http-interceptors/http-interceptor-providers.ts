import {HTTP_INTERCEPTORS} from '@angular/common/http';

/* multi: true option setting tells Angular that HTTP_INTERCEPTORS is a token for a multiprovider
 * that injects an array of values, rather than a single value.
 */
export const HttpInterceptorProviders = [
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: LoaderInterceptor,
    //     multi: true,
    // },
    {
        provide: HTTP_INTERCEPTORS,
        multi: true
    },
    // {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: CachingInterceptor,
    //     multi: true
    // }
];

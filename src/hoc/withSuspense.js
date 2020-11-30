import React, {Suspense} from 'react';
import Preloader from '../components/Common/Preloader/Preloader';

export let withSuspense = (Component) => (props) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    )
}
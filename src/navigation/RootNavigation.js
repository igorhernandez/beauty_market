import * as React from 'react';

export const navigationRef = React.createRef();

const Navigate = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};

export {Navigate};

import React from 'react';
export default function FooList({ foos }) {
    return /*#__PURE__*/ React.createElement(React.Fragment, null);
}
export const layout = {
    areaId: 'content',
    sortOrder: 30
};
export const query = `
  query Query {
    foos {
      id
      name
      description
    }
  }
`;

import {ElementType, ComponentProps, PropsWithChildren} from 'react';

/*
* A polymorphic component is one that can adapt its rendered element based on the context or specific requirements.
* In React, this flexibility is achieved by leveraging TypeScript generics.
* */

export type ButtonProps<AS extends ElementType> =
    PropsWithChildren<{
      as?: AS;
    }> &
    Omit<ComponentProps<AS>, 'as'>;

const Button = <AS extends ElementType>(props: ButtonProps<AS>) => {
  const {
    as: Element = 'button',
    children,
    ...attrs
  } = props;

  return (
      <Element {...attrs}>{children}</Element>
  );
};
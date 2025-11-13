/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import { LoginForm } from '@/demo-dropin/components';

export interface LoginContainerProps extends HTMLAttributes<HTMLDivElement> {}
    
export const LoginContainer: Container<LoginContainerProps> = ({ children, ...props }) => {
  return (
    <LoginForm {...props}>
      {children}
    </LoginForm>
  );
};

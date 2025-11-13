/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';
import { classes } from '@adobe-commerce/elsie/lib';
import '@/demo-dropin/components/LoginForm/LoginForm.css';
import { InLineAlert } from '@adobe-commerce/elsie/components/InLineAlert';
import { Accordion, AccordionSection } from '@adobe-commerce/elsie/components/Accordion';
import { TextSwatch } from '@adobe-commerce/elsie/components/TextSwatch';
import { Input } from '@adobe-commerce/elsie/components/Input';
export interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {}

export const LoginForm: FunctionComponent<LoginFormProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={classes(['demo-dropin-login-form', className])}>
      {children}
      <InLineAlert
        heading="In Line Alert heading"
        description="Description of the In Line Alert"
        type="warning"
        additionalActions={[
          {
          label: 'Action 1',
          onClick: ()=>{},
          },
        ]}
      />
      <Accordion>
        <AccordionSection title={"Title"}><p>Short product details should be kept to 6 lines maximum.</p></AccordionSection>
      </Accordion>
      <TextSwatch label="Demo" outOfStock="true" />
      <Input placeholder="placeholder" />
    </div>
  );
};

import { useRouter } from 'next/router';
import React, { AnchorHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content, ActiveBar } from '../../../styles/components/SideBarLink';

type SideBarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  isActivable?: boolean;
  href?: string;
};

export function SideBarLink({ title, icon: Icon, isActivable = false, href, ...rest }: SideBarLinkProps) {
  const { asPath } = useRouter();

  if (isActivable) {
    const isActive = asPath === href;

    return (
      <Container href={href} type="button" isActive={isActive} tabIndex={0} {...rest}>
        <Content>
          {isActive && <ActiveBar data-testid="active-bar" />}
          <Icon size={32} title={title} aria-hidden="false" />
        </Content>
      </Container>
    );
  }

  return (
    <Container href={href} type="button" tabIndex={0} {...rest}>
      <Content>
        <Icon size={32} title={title} aria-hidden="false" />
      </Content>
    </Container>
  );
}

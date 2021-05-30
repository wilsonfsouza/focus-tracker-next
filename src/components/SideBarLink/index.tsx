import React, { AnchorHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content, ActiveBar } from '../../styles/components/SideBarLink';

type SideBarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  icon: React.ComponentType<IconBaseProps>;
  isActivable?: boolean;
  isActive?: boolean;
  href?: string;
};

const SideBarLink: React.FunctionComponent<SideBarLinkProps> = ({ title, icon: Icon, isActivable = false, isActive, href, ...rest }) => {
  if (isActivable) {
    return (
      <Container href={href} type="button" isActive={isActive} tabIndex={0} {...rest}>
        <Content>
          {isActive && <ActiveBar />}
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

export default SideBarLink;

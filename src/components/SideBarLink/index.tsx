import React, { AnchorHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content, ActiveBar } from '../../styles/components/SideBarLink';

type SideBarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActivable?: boolean;
  isActive?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  href?: string;
};

const SideBarLink: React.FunctionComponent<SideBarLinkProps> = ({ isActivable, isActive, icon: Icon, href, ...rest }) => {
  return (
    <Container href={href} type="button" isActive={isActive} {...rest}>
      <Content>
        {isActivable && isActive && <ActiveBar />}
        {Icon && <Icon size={32} />}
      </Content>
    </Container>
  );
}

export default SideBarLink;

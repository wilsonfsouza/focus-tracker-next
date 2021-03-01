import React, { AnchorHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content, ActiveBar } from '../../styles/components/SideBarButton';

type SideBarButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActivable?: boolean;
  isActive?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const SideBarButton: React.FunctionComponent<SideBarButtonProps> = ({ isActivable, isActive, icon: Icon, ...rest }) => {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      <Content>
        {isActivable && isActive && <ActiveBar />}
        {Icon && <Icon size={32} />}
      </Content>
    </Container>
  );
}

export default SideBarButton;

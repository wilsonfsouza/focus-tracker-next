import React, { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content } from '../../styles/components/ThemeButton';

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<IconBaseProps>;
};

const ThemeButton: React.FunctionComponent<ThemeButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <Content>
        {Icon && <Icon size={32} />}
      </Content>
    </Container>
  );
}

export default ThemeButton;

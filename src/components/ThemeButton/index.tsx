import { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, Content } from '../../styles/components/ThemeButton';

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<IconBaseProps>;
};

export function ThemeButton({ icon: Icon, ...rest }: ThemeButtonProps) {
  return (
    <Container type="button" {...rest}>
      <Content>
        {Icon && <Icon size={32} />}
      </Content>
    </Container>
  );
}

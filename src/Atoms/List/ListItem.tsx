import styled from 'styled-components';
import { useTheme } from '../../Theme/ThemeProvider';

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  isLast?: boolean;
}



const ListItem: React.FC<ListItemProps> = ({ children, className = '', isLast = false, ...props }) => {
  const { colors } = useTheme();
  const StyledLi = styled.li<{ $border: string; $hoverBg: string }>`
  color: ${() => colors.text?.main};
  padding: 6px 12px;
  border-bottom: ${({ $border }) => $border};
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: ${({ $hoverBg }) => $hoverBg};
  }
`;
  return (
    <StyledLi
      className={`${className} kariu-list-item`}
      $border={isLast ? 'none' : `1px solid ${colors.border}`}
      $hoverBg={colors.background?.dark || '#f5f5f5'}
      {...props}
    >
      {children}
    </StyledLi>
  );
};

export default ListItem; 
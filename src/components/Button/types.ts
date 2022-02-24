export interface iProps {
  children: React.ReactNode;
  fn?: () => void;
  toggle: boolean;
}

export interface iPropsStyle {
  $toggle: boolean;
}

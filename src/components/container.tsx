interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`flex-1 space-y-4 p-4 ${className}`}>{children}</div>;
};

export default Container;

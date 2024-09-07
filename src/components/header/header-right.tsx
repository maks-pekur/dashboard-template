interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeaderRight: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`flex items-center gap-4 md:ml-auto ${className}`}>
      {children}
    </div>
  );
};

export default HeaderRight;

interface Props {
  children: React.ReactNode;
}

const HeaderLeft: React.FC<Props> = ({ children }) => {
  return <div className="flex items-center gap-4 md:mr-auto">{children}</div>;
};

export default HeaderLeft;

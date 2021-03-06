export default function ShowWhenTrue({ condition, children }) {
  if (condition) {
    return <>{children}</>;
  }
  return null;
}

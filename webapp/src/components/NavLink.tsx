export default function NavLink({ label }: { label: string }) {
  return (
    <div style={{ padding: 10, cursor: "pointer" }}>
      {label}
    </div>
  );
}

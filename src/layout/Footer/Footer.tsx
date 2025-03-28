export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="border-t p-4">
      <div className="text-muted-foreground text-center text-sm">
        <p>Copyright 2025</p>
      </div>
    </footer>
  );
}

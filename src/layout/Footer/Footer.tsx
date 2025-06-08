/**
 * Footer module.
 *
 * @module Footer
 * @description Renders the site footer with copyright information.
 */

/**
 * Footer component displaying the application’s footer content.
 *
 * @component
 * @returns The footer element with site copyright.
 */
export default function Footer() {
  return (
    <footer className="border-t p-4">
      <div className="text-muted-foreground text-center text-sm">
        <p>Copyright 2025</p>
      </div>
    </footer>
  );
}

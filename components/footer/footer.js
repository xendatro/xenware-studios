export default function Footer() {
  return (
    <footer className="mt-10">
      <hr className="border-zinc-700" />
      <p className="text-center text-sm text-zinc-500 py-4">
        © {new Date().getFullYear()} Xenware Studios. All rights reserved.
      </p>
    </footer>
  );
}

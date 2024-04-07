import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex w-auto bg-gray-800 justify-evenly align-middle h-20 text-slate-100 ">
      <Link href={"/servicios"}>Servicios</Link>
      <Link href={"/deteccion"}>Detección</Link>
      <Link href={"/extincion"}>Extinción</Link>
      <Link href={"/contacto"}>Contacto</Link>
    </div>
  );
}

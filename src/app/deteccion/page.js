import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div>
      <p className="font-bold text-2xl ">
        Acá se muestra los servicios de detección
        <Image width={600} height={300} alt="Inspeccion deteccion" src={"/inspecciondetec.jpg"} loading="lazy"></Image>
      </p>
    </div>
  );
}

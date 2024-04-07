import Image from "next/image";

export default function Home() {
  return (
    <div className="flex content-center">
      <p className="text-6xl text-center">Surtr</p>
      <Image src={'/Surtr.webp'} width={600} height={500} alt="logo mantenimiento" loading="eager"></Image>
    </div>
  );
}

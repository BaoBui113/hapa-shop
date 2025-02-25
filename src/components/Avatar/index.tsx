import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Avatar({ src }: { src: StaticImport }) {
  return (
    <div className="w-9 h-9 relative rounded-full">
      <Image src={src} alt="avatar" fill />
    </div>
  );
}

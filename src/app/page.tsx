import Image from "next/image";
import styles from "./page.module.css";
import ClassicTemplate from "@/component/templates/ClassicTemplate";

export default function Home() {
  return (
    <>
      <ClassicTemplate
        groom="John Doe"
        bride="Jane Doe"
        date="2026-09-19 11:00:00"
        time="10:00"
        place="123 Main St, Anytown, USA"
      />
    </>
  );
}

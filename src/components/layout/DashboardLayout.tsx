import Image from "next/image";
// import { UserButton } from "@clerk/nextjs";
import { NavButton } from '../NavButton';
import styles from "./DashboardLayout.module.css";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navUrls = ["costcompare", "rentpurchase", "view-participants", "connections"];
  const navNames = ["購入可能額", "賃貸VS購入", "もう一つ", "もう一つ"];

  return (
    <div className={styles.fullWidth}>
      <header>
        <div className={styles.logoRow}>
          <Image src="/NakedLogo.png" width={100} height={64.34} alt="WOW"></Image>
          {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        </div>

        <nav className={styles.nav}>
          {
            navNames.map((navName, idx) => {
              return <NavButton key={navName} navUrl={navUrls[idx]} >{navName}</NavButton>;
            })
          }
        </nav>
      </header>
      {children}
    </div>
  );
}

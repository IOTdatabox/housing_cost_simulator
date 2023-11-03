import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./NavButton.module.css";

const NavButton = ({
    children,
    navUrl
}: {
    children: React.ReactNode,
    navUrl: string
}) => {
    const router = useRouter();
    const [activeFlag, setActiveFlag] = useState(router.asPath.endsWith(navUrl) ? true : false);

    function onBtnClicked() {
        setActiveFlag(true);
        router.push(router.basePath + "/dashboard/" + navUrl);
    }

    return (
        <button className={activeFlag == true ? styles.activeButton : styles.button} onClick={onBtnClicked}>
            {children}
        </button>
    );
};

NavButton.displayName = "NavButton";

export { NavButton };

import { List } from "@fluentui/react-northstar";
import { useEffect, useState } from "react";
import { ReactMegaMenu } from "react-mega-menu";
import { SubMenuItem1 } from "../SubMenuItem1";

const MegaMenuItems = {
  0: [
    {
      label: "Sub Menu Item 1",
      key: "sub_menu_item_1",
      items: <SubMenuItem1 />,
    },
    {
      label: "Sub Menu Item 2",
      key: "sub_menu_item_2",
      items: <></>,
    },
    {
      label: "Sub Menu Item 3",
      key: "sub_menu_item_3",
      items: <></>,
    },
  ],
  1: [],
  2: [],
  3: [],
  4: [],
};

function TopMenu({ onClick }) {
  const items = [
    {
      key: "MenuItem1",
      header: "MenuItem1",
    },
    {
      key: "MenuItem2",
      header: "MenuItem2",
    },
    {
      key: "MenuItem3",
      header: "MenuItem3",
    },
    {
      key: "MenuItem4",
      header: "MenuItem4",
    },
    {
      key: "MenuItem5",
      header: "MenuItem5",
    },
  ];

  return (
    <List
      selectable
      defaultSelectedIndex={0}
      items={items}
      horizontal
      onSelectedIndexChange={onClick}
    />
  );
}

function MegaMenu({ items }) {
  return (
    <ReactMegaMenu
      tolerance={50}
      styleConfig={{
        menuProps: {
          style: {
            height: "100vh",
            width: "15em",
            margin: "0",
          },
        },
        contentProps: {
          style: {
            background: "#fff",
            width: "10em",
            padding: "2px",
          },
        },
        menuItemProps: {
          style: {
            padding: "8px",
            height: "auto",
            color: "#6264A7",
            fontSize: "1.1em",
          },
        },
        menuItemSelectedProps: {
          style: {
            padding: "8px",
            height: "auto",
            color: "#6264A7",
            fontSize: "1.1em",
            backgroundColor: "#fff",
            cursor: "pointer",
          },
        },
        containerProps: {
          style: {
            background: "rgba(70,71,117,0.4)",
          },
        },
      }}
      onExit={() => {}}
      data={items}
    />
  );
}

export function Dashboard() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [megaMenu, setMegaMenu] = useState(MegaMenuItems[0]);

  const onClickTopMenu = (e: any, newProps: any) => {
    setActiveMenu(newProps.selectedIndex);
  };

  useEffect(() => {
    setMegaMenu(MegaMenuItems[activeMenu]);
  }, [activeMenu]);

  return (
    <>
      <TopMenu onClick={onClickTopMenu} />
      <MegaMenu items={megaMenu} />
    </>
  );
}

import { OpenOutsideIcon } from "@fluentui/react-icons-northstar";
import {
  Button,
  Header,
  Input,
  List,
  SearchIcon,
} from "@fluentui/react-northstar";
import { useState } from "react";
import "./index.scss";
import { NavigationItems } from "./navigation";

export function Settings() {
  const [navigation, setNavigation] = useState(NavigationItems);
  const [orgNavigation, setOrgNavigation] = useState(NavigationItems);
  const [showAddNewEntry, toggleAddNewEntry] = useState(false);
  const [menuName, setMenuName] = useState(null);

  const prepareNavigation = (items) => {
    return items.map((item, index) => (
      <>
        <li key={index}>{item.title}</li>
        {item && item.items && (
          <ul style={{ marginLeft: `${item.level * 1} rem` }}>
            {prepareNavigation(item.items)}
          </ul>
        )}
      </>
    ));
  };

  const onAddNewEntry = () => {
    if (!menuName || menuName.length === 0) {
      return alert("Please add menu name");
    }
    const newMenu = {
      title: menuName,
      level: 1,
    };
    setNavigation([...navigation, newMenu]);
    setOrgNavigation([...navigation, newMenu]);
    hideAddNewEntry();
  };

  const hideAddNewEntry = () => {
    setMenuName(null);
    toggleAddNewEntry(false);
  };

  const onSearch = (term) => {
    if (term && term.length > 0)
      setNavigation(
        orgNavigation.filter((item) =>
          item.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    else setNavigation(orgNavigation);
  };

  return (
    <div className="settings">
      <div className="left">
        <Header as="h3" content="Settings" className="left-title" />
        <div className="left-menu">
          <div className="item">
            <div className="badge">1</div>
            <Header as="h4" content="Settings" />
          </div>
          <div className="left-menu-sub-item">
            <List
              items={[
                {
                  key: "step1",
                  media: <OpenOutsideIcon outline size="large" />,
                  header: "Step 1",
                },
                {
                  key: "step2",
                  media: <OpenOutsideIcon outline size="large" />,
                  header: "Step 2",
                },
                {
                  key: "step3",
                  media: <OpenOutsideIcon outline size="large" />,
                  header: "Step 3",
                },
              ]}
            />
          </div>
        </div>
        <div className="left-menu">
          <div className="item">
            <div className="badge">2</div>
            <Header as="h4" content="Administration" />
          </div>
          <div className="left-menu-sub-item">
            <List
              items={[
                {
                  key: "licensing",
                  media: <OpenOutsideIcon outline size="large" />,
                  header: "Licensing",
                },
                {
                  key: "administrators",
                  media: <OpenOutsideIcon outline size="large" />,
                  header: "Administrators",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <section>
          <Header
            as="h3"
            content="Configure Navigation"
            description="The Mega Menu can be configured here."
          />
          <Header
            as="h4"
            content="Add Navigation entries"
            description="Here's an example of how a section can be used to group inputs"
          />
        </section>
        <section>
          <Button
            content="+ Add Entry"
            onClick={() => toggleAddNewEntry(true)}
            primary
          />
          <Input
            className="settings-search"
            icon={<SearchIcon />}
            onChange={(e: any) => onSearch(e.target.value)}
            placeholder="Search for a navigation entry"
          />
        </section>
        {showAddNewEntry && (
          <section className="settings-add-new">
            <Input
              placeholder="Menu Name"
              value={menuName}
              onChange={(e: any) => setMenuName(e.target.value)}
            />
            <Button content="Save" onClick={() => onAddNewEntry()} primary />
            <Button
              content="Cancel"
              onClick={() => hideAddNewEntry()}
              secondary
            />
          </section>
        )}
        <section>
          <ul>{prepareNavigation(navigation)}</ul>
        </section>
      </div>
    </div>
  );
}

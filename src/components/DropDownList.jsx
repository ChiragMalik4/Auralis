import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationItems from "../constants/NavBar/MobileNavBar";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const RecursiveList = ({ items, expanded, handleToggleExpand, level = 0 }) => {
  return (
    <List
      component="div"
      disablePadding
      style={{
        paddingLeft: level * 16, // Indentation for nested levels
      }}
    >
      {items.map(({ id, title, url, children }) => (
        <div key={id}>
          <ListItem button onClick={() => handleToggleExpand(id)}>
            {/* Use an anchor tag for the URL */}
            <Link
              to={url}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemText primary={title} />
            </Link>
            {children && (expanded[id] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {children && (
            <Collapse in={expanded[id]} timeout="auto" unmountOnExit>
              <RecursiveList
                items={children}
                expanded={expanded}
                handleToggleExpand={handleToggleExpand}
                level={level + 1} // Increase indentation level for nested lists
              />
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

const DropDownList = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <RecursiveList
      items={NavigationItems}
      expanded={expanded}
      handleToggleExpand={handleToggleExpand}
    />
  );
};

export default DropDownList;

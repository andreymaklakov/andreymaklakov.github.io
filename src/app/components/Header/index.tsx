import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

import avatar from "../../../images/avatar/avatar.png";
import { SvgButton, svgButtons } from "../../../constants/btns";
import { navLinks } from "../../../constants/links";
import { AppDispatch } from "../../store/store";
import { changeTheme, getTheme, Theme } from "../../store/theme";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const [activePage, setActivePage] = useState("");
  const theme: Theme = useSelector(getTheme());

  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const handleChangeAtivePage = (route: string) => {
    setActivePage(route);
  };

  const headerStyles = cn({
    [styles.header_dark]: theme === "dark",
    [styles.header]: true,
  });

  const navLinkStyles = (route: string) =>
    cn({
      [styles.active]: route === activePage,
    });

  const handleClick = (btn: SvgButton) => {
    if (btn.name === "sun") {
      dispatch(changeTheme());
    }
  };

  return (
    <header className={headerStyles}>
      <nav>
        <Link to={"/"} onClick={() => handleChangeAtivePage("/")}>
          <h4>Портал Разработчика</h4>
        </Link>

        {navLinks.map((link) => (
          <Link
            onClick={() => handleChangeAtivePage(link.route)}
            key={link.route}
            to={link.route}
            className={navLinkStyles(link.route)}
          >
            {link.name}
            {link.route === activePage ? <div /> : ""}
          </Link>
        ))}
      </nav>

      <div className={styles.header_right_side}>
        <div className={styles.header_right_side_btns}>
          {svgButtons.map((btn) => (
            <button onClick={() => handleClick(btn)} key={btn.name}>
              {btn.content}
            </button>
          ))}
        </div>

        <Link to={"/me"} onClick={() => handleChangeAtivePage("/me")}>
          <img src={avatar} alt="avatar" />
          <p>Михаил Романов</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

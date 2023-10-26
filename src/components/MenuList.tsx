// import Item from "./Item";
import "./MenuList.scss";
import "./Item.scss";
import { useEffect, useState } from "react";

export default function MenuList() {
  const [menuData, setMenuData] = useState<Model.Items[]>([]);
  const menuDataApi = async () => {
    try {
      const res = await fetch(
        "https://skilled-prosperity-c2f89bf4d5.strapiapp.com/api/menu-lists"
      ).then((res) => res.json());
      // console.log(res.data);
      setMenuData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    menuDataApi();
  }, []);

  return (
    <section className="menu-box">
      <div className="content">
        <ul>
          {menuData.map((list) => (
            <li className="item-list" key={list.id}>
              <a href="">
                <div className="mark">
                  <i
                    className={
                      list.attributes.menuNewState ? "mark-new on" : "mark-new"
                    }
                  >
                    신규
                  </i>
                  <i
                    className={
                      list.attributes.menuSellState
                        ? "mark-sell on"
                        : "mark-sell"
                    }
                  >
                    품절
                  </i>
                </div>
                <span className="item-thumb">
                  <img
                    src={`${import.meta.env.BASE_URL}/img/${
                      list.attributes.menuThumb
                    }`}
                  />
                </span>
                <dl className="item-info">
                  <dt className="item-name">
                    {list.attributes.menuName} :{" "}
                    <span>{list.attributes.menuPrice}</span>
                  </dt>
                  <dd>{list.attributes.menuInfo}</dd>
                </dl>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// import Item from "./Item";
import "./MenuList.scss";
import "./Item.scss";
import { useEffect, useState } from "react";

export default function MenuList() {
  const [menuData, setMenuData] = useState<Model.Items[]>([]);
  const menuDataApi = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/menu-lists").then(
        (res) => res.json()
      );
      console.log(res.data);
      setMenuData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    menuDataApi();
    console.log(menuData);
  }, []);

  return (
    <section className="menu-box">
      <div className="content">
        <ul>
          {menuData.map((list) => (
            <li className="item-list" key={list.id}>
              <a href="">
                <span className="item-thumb">
                  <img src={`/img/${list.attributes.menuThumb}`} />
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

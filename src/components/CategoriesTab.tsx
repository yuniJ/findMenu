import { useEffect, useState } from "react";
import "./CategoriesTab.scss";

export default function CategoriesTab() {
  const [cateogoryData, setCateogoryData] = useState<Model.Cateogories[]>([]);
  const categoryDataApi = async () => {
    try {
      const res = await fetch(
        "https://skilled-prosperity-c2f89bf4d5.strapiapp.com/api/cateogories"
        // "http://localhost:1337/api/cateogories"
      ).then((res) => res.json());
      console.log(res.data);
      setCateogoryData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    categoryDataApi();
  }, []);

  return (
    <div className="categoryBox">
      <ul>
        {cateogoryData.map((list) => (
          <li className="list" key={list.id}>
            <a href="">{list.attributes.category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

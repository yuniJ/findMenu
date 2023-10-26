import "./CategoriesTab.scss";

export default function CategoriesTab() {
  return (
    <div className="categoryBox">
      <ul>
        <li className="list on">
          <a href="">카테고리1</a>
        </li>
        <li className="list">
          <a href="">카테고리2</a>
        </li>
        <li className="list">
          <a href="">카테고리3</a>
        </li>
        <li className="list">
          <a href="">카테고리4</a>
        </li>
      </ul>
    </div>
  );
}

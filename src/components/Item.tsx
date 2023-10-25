import "./Item.scss";

// const menuItem: Model.Items = {
//   category: "",
//   name: "",
//   info: "",
//   thumb: "",
// };

export default function Item(menuItem: any) {
  console.log(menuItem.name);

  return (
    <li className="item-list">
      <a href="">
        <span className="item-thumb">
          <img src={`/img/${menuItem.thumb}`} />
        </span>
        <dl className="item-info">
          <dt className="item-name">{menuItem.name}</dt>
          <dd>{menuItem.info}</dd>
        </dl>
      </a>
    </li>
  );
}

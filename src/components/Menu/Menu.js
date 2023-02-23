import { Link } from "react-router-dom";
import ColMenu from "./ColMenu";


function Menu({data}) {
    return (
      <ul className="text-black shadow-2xl rounded-xl overflow-hidden py-5">
        {data.some((item) => !!item.children) && (
          <ColMenu data={data.filter((item) => !!item.children)} />
        )}
        {data
          .filter((item) => !item.children)
          .map((item, index) => (
            <li key={index} className=" hover:bg-green-primary hover:text-white">
              <Link to={item.link} className="py-3 px-5 text-2xl block">
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
  

export default Menu;
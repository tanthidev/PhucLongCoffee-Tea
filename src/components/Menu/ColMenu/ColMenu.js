import { Link } from "react-router-dom";

function ColMenu({ data }) {
    // console.log(data);
    return (
      <div className="flex cursor-pointer">
        {data.map((item, index) => (
          <div key={index} className="">
            <Link to={item.link} className="px-2 py-2 text-2xl h-fit font-semibold block rounded  hover:bg-green-primary hover:text-white">
              {item.title}
            </Link>
            
            <div className="border-r border-l border-green-primary">
            {item.children && (
              <ColMenu data={item.children} />
            )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  

export default ColMenu;
import { NavLink } from "react-router-dom";
import { navItem } from "../../Shared/types";
interface props {
    items: navItem[]
}

function TabsNavigation({ items }: props) {
    return (

        <div className="flex flex-col w-full gap-2 ">
            <div className="flex justify-between gap-4 ms-4 md:justify-normal">
                {items.map((item: navItem) => (
                    <NavLink
                        className={`block px-2 py-2 text-lg hover:bg-slate-200 hover:border-b-primary-orange hover:border-bottom-1`}
                        key={item.text}
                        to={item.to}>
                        {item.text}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default TabsNavigation
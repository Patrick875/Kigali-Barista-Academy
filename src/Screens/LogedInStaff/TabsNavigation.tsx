import { NavLink } from "react-router-dom";
import { navItem } from "../../Shared/types";

interface Props {
    items: navItem[];
}

function TabsNavigation({ items }: Props) {
    return (
        <div className="flex flex-col w-full gap-2 mt-2">
            <div className="flex justify-between gap-4 ms-4 md:justify-normal">
                {items.map((item: navItem) => (
                    <NavLink
                        end
                        className={({ isActive }) =>
                            `block px-2 py-2 text-lg ${isActive ? 'bg-light-chocolate text-white' : 'hover:bg-orange-900 hover:text-white'}`
                        }
                        key={item.text}
                        to={item.to}
                    >
                        {item.text}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default TabsNavigation;

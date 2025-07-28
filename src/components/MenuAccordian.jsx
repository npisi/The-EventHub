import { useState } from "react"
import NestedMenuAccordian from "./NestedMenuAccordian"

const MenuAccordian = ({ name, desc, price, packageItems }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordian = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div className="menu-accordion">
  <div
    className="menu-accordion-header"
    onClick={toggleAccordian}
    id={name.packageId}
  >
    <span>{name}</span>
    <span>{price} per Person</span>
  </div>
  {isOpen && (
    <div className="menu-accordion-content">
      {packageItems.map((item) => (
        <NestedMenuAccordian
          key={item.menuType}
          name={item.menuType}
          quantity={item.quantity}
          menuOptions={item.menuOptions}
        />
      ))}
    </div>
  )}
</div>

        </>
    )
}
export default MenuAccordian
import { useState } from "react"

const NestedMenuAccordian = ({ name, quantity, menuOptions }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordian = () => {
        setIsOpen(!isOpen)
    }
    console.log(menuOptions)
    return (
        <div className="nested-accordion">
            <div
                className="nested-accordion-header"
                onClick={toggleAccordian}>
                <span>{name}</span>
                <span style={{ color: '#888', fontSize: '0.95rem', marginLeft: '10px' }}>Qty: {quantity}</span>
            </div>
            {isOpen && (
                <ul className="nested-accordion-list">
                    {menuOptions.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NestedMenuAccordian
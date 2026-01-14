import { useState } from "react";

export default function useOpenable(canOpen: boolean = true) {
    const [isOpen, setIsOpen] = useState(canOpen);

    const handleClick = () => {
        setIsOpen(!isOpen && canOpen);
    }

    return { isOpen, handleClick };
}
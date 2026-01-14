import { useState } from "react";

export default function useOpenable(initialState: boolean = true) {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleClick = () => {
        setIsOpen(!isOpen && initialState);
    }

    return { isOpen, handleClick };
}
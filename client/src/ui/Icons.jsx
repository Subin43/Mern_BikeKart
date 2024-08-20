import React from 'react';
import { BsArrowDownLeft,BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegHeart,FaWhatsappSquare ,FaLessThan,FaGreaterThan,FaMapMarkerAlt,FaLinkedin,FaWhatsapp,FaGithub   } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineAccountCircle,MdOutlineCall } from "react-icons/md";

const ReactIcons = [
    { id: 1, icon: BsArrowDownLeft },
    { id: 2, icon:FaRegHeart},
    { id: 3, icon:GoArrowUpRight},
    { id: 4, icon:MdOutlineAccountCircle},
    { id: 5, icon:MdOutlineCall},
    { id: 6, icon:FaWhatsappSquare },
    { id: 7, icon:BsThreeDotsVertical},
    { id: 8, icon:FaLessThan},
    { id: 9, icon:FaGreaterThan},
    { id: 10,icon:FaMapMarkerAlt},
    { id: 11,icon:FaLinkedin},
    { id: 12,icon:FaWhatsapp},
    { id: 13,icon:FaGithub},
];

const Icons = ({ iconId, size = 24, color = 'black' }) => {
    const icon = ReactIcons.find(icon => icon.id === iconId);
    if (!icon) {
        return <p>Icon not found</p>;
    }
    const IconComponent = icon.icon;

    return (
        <div style={{ fontSize: size, color }}>
            <IconComponent />
        </div>
    );
};

export default Icons;

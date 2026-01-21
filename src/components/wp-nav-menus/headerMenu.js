import React, { useEffect, useState } from 'react';

export default function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`${WP_DATA.apiUrl}reactpress/v1/menu/main-menu`)
        .then(res => res.json())
        .then(setMenu);
    }, []);
  
    return (
        <nav>
            <ul>
                {menu.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                </li>
                ))}
            </ul>
        </nav>
    );
}

import React from 'react';
import Index from "./NewTodoForm";

function Header() {
    return (
        <header className="header">
            <h1>todos</h1>
            <Index/>
        </header>
    );
}

export default Header;
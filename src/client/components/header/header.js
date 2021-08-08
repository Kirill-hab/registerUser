import React from "react";

import "./header.css"

export function Header(data) {

    const onStateUp = () => {
        data.upStatus()
    }
    return (
        <div className="header">
            <button className="btn btn-outline-warning" disabled={!data.statusApp} onClick={onStateUp}>
                Регистрация
            </button>
            <button className="btn btn-outline-primary" disabled={data.statusApp} onClick={onStateUp}>
                Войти
            </button>
        </div>
    )
}
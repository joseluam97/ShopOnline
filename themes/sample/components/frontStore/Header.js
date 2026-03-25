import Area from '@components/common/Area.js';
import React from 'react';
export function Header() {
    return /*#__PURE__*/ React.createElement("header", {
        className: "header bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "headerTop",
        className: "header__top"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "max-w-screen-2xl mx-auto px-6 py-4"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex justify-between items-center"
    }, /*#__PURE__*/ React.createElement("nav", {
        className: "flex-1 flex gap-8 font-semibold text-sm text-gray-700"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/page/productos",
        className: "hover:text-black"
    }, "LAMINAS"), /*#__PURE__*/ React.createElement("a", {
        href: "/page/productos",
        className: "hover:text-black"
    }, "PRODUCTOS")), /*#__PURE__*/ React.createElement("div", {
        className: "flex-none"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/",
        className: "block"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/images/atlantika_logo_menu.jpeg",
        alt: "Logo",
        className: "h-10 w-auto"
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "flex-1 flex justify-end items-center gap-6"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/account",
        className: "text-sm font-semibold text-gray-700 hover:text-black"
    }, "CUENTA"), /*#__PURE__*/ React.createElement("a", {
        href: "/cart",
        className: "flex items-center bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition"
    }, "CARRITO (0)")))), /*#__PURE__*/ React.createElement(Area, {
        id: "headerBottom",
        className: "header__bottom"
    }));
}
export const layout = {
    areaId: 'wrapper',
    sortOrder: 1
};


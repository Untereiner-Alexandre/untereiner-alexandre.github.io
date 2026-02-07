import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as m}from"./index.WFquGv8Z.js";import{b as e}from"./about.424cc737.TSmFj-hc.js";import{c as l}from"./createLucideIcon.D3Uz7Iiz.js";/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],p=l("menu",h);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],j=l("x",x);function u({links:c,currentLang:t,currentPathname:r,children:i}){const[o,n]=m.useState(!1),d=`/${t}/`;return s.jsxs("header",{className:e.header,children:[s.jsxs("div",{className:e.container,children:[s.jsx("a",{href:d,className:e.logo,children:s.jsx("span",{className:e.logoIcon})}),s.jsxs("nav",{className:e.desktopNav,children:[s.jsx("div",{className:e.linksGroup,children:c.map(a=>s.jsx("a",{href:a.href,className:`${e.navLink} ${r===a.href?e.activeLink:""}`,children:a.label},a.href))}),s.jsx("div",{className:e.actions,children:i})]}),s.jsx("button",{className:e.mobileToggle,onClick:()=>n(!o),"aria-label":"Menu",children:o?s.jsx(j,{size:24}):s.jsx(p,{size:24})})]}),s.jsx("div",{className:`${e.mobileMenu} ${o?e.open:""}`,children:s.jsxs("div",{className:e.mobileContent,children:[c.map(a=>s.jsx("a",{href:a.href,className:`${e.mobileLink} ${r===a.href?e.activeLink:""}`,onClick:()=>n(!1),children:a.label},a.href)),s.jsx("hr",{className:e.divider}),s.jsx("div",{className:e.mobileActions,children:i})]})})]})}export{u as Header};

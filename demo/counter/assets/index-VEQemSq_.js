(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=c(s);fetch(s.href,t)}})();const f=(i,r)=>{let c=1;function l(){c++}return()=>{if(i===void 0&&(i=0),r===void 0&&(r=1),isNaN(i)||isNaN(r))return 0;const s=i+r*c;return l(),s}};let m=f(0,1),d=!0;function u(){m=f(Number(n.value),Number(a.value)),d=!0,v()}const n=document.getElementById("start_at"),a=document.getElementById("step");n==null||n.addEventListener("change",()=>u());a==null||a.addEventListener("change",()=>u());const e=document.querySelector(".count_button"),p=document.querySelector(".current_count");function L(){d&&(m=f(Number(n.value),Number(a.value)),d=!1),v()}e==null||e.addEventListener("click",L);function v(){const i=m();y(i),p.textContent=i.toString()}function y(i){const r="positive",c="negative";i>0?(e==null||e.classList.add(r),e!=null&&e.classList.contains(c)&&(e==null||e.classList.remove(c))):i<0?(e==null||e.classList.add(c),e!=null&&e.classList.contains(r)&&(e==null||e.classList.remove(r))):(e!=null&&e.classList.contains(c)&&(e==null||e.classList.remove(c)),e!=null&&e.classList.contains(r)&&(e==null||e.classList.remove(r)))}

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=c(s);fetch(s.href,i)}})();const f=(t,r)=>{let c=1;function n(){c++}return()=>{t===void 0&&(t=0),r===void 0&&(r=1);const s=t+r*c;return n(),s}};let m=f(0,1),d=!0;function u(){m=f(0,0),d=!0,p()}const a=document.getElementById("start_at"),l=document.getElementById("step");a==null||a.addEventListener("change",()=>u());l==null||l.addEventListener("change",()=>u());const e=document.querySelector(".count_button"),L=document.querySelector(".current_count");function v(){d&&(m=f(Number(a.value),Number(l.value)),d=!1),p()}e==null||e.addEventListener("click",v);function p(){const t=m();y(t),L.textContent=t.toString()}function y(t){const r="positive",c="negative";t>0?(e==null||e.classList.add(r),e!=null&&e.classList.contains(c)&&(e==null||e.classList.remove(c))):t<0?(e==null||e.classList.add(c),e!=null&&e.classList.contains(r)&&(e==null||e.classList.remove(r))):(e!=null&&e.classList.contains(c)&&(e==null||e.classList.remove(c)),e!=null&&e.classList.contains(r)&&(e==null||e.classList.remove(r)))}
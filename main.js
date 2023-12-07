import Typed from './node_modules/typed.js';
import AOS from 'aos';
import './style.css'

const typeUi = document.querySelector("#typeUi");

const typed = new Typed(typeUi,{
    strings : ["<span class='text-blue-500'>Companies</span>", "<span class='text-gray-500'>House</span>", "Organization"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    contentType: 'html',
    loop : true,
})

AOS.init();
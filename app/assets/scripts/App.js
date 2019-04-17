import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader'
import $ from 'jquery';

// Create Burger Menu
var mobileMenu = new MobileMenu();

// Editing while Scroll 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "80%")

// Access To Navbar 
var stickyHeader = new StickyHeader();
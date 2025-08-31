// Theme toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // SVG icon swap handled in index.html script
});

// Mute toggle (placeholder, no sound implemented)
const muteBtn = document.getElementById('toggle-mute');
let isMuted = false;
// Add sound elements to the DOM
if (!document.getElementById('sound-click')) {
    const clickAudio = document.createElement('audio');
    clickAudio.id = 'sound-click';
    clickAudio.src = 'assets/click.mp3';
    clickAudio.preload = 'auto';
    document.body.appendChild(clickAudio);
}
if (!document.getElementById('sound-close')) {
    const closeAudio = document.createElement('audio');
    closeAudio.id = 'sound-close';
    closeAudio.src = 'assets/close.mp3';
    closeAudio.preload = 'auto';
    document.body.appendChild(closeAudio);
}
if (!document.getElementById('sound-hover')) {
    const hoverAudio = document.createElement('audio');
    hoverAudio.id = 'sound-hover';
    hoverAudio.src = 'assets/hover.mp3';
    hoverAudio.preload = 'auto';
    document.body.appendChild(hoverAudio);
}
if (!document.getElementById('sound-success')) {
    const successAudio = document.createElement('audio');
    successAudio.id = 'sound-success';
    successAudio.src = 'assets/success.mp3';
    successAudio.preload = 'auto';
    document.body.appendChild(successAudio);
}
// Update mute toggle to control sound
muteBtn.addEventListener('click', () => {
    // SVG icon swap and isMuted handled in index.html script
});
function playSound(id) {
    if (isMuted) return;
    const audio = document.getElementById(id);
    if (audio) {
        audio.currentTime = 0;
        try {
            audio.play();
        } catch (e) {
            // Ignore play errors (e.g., missing file or unsupported format)
        }
    }
}

// Popup/modal logic
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-close');
const navLinks = document.querySelectorAll('.nav-icons a');

// TODO:  Add projecs to the work popup 

const popupData = {
    about: {
        title: 'about me',
        content: `
        <div class="popup-profile">
            <img src="assets/avatars/image.png" alt="avatar" class="popup-avatar">
            <div>
                <div class="popup-title-main">Yuruna<span style="font-size:1.2rem; color:#ffa726;"></span></div>
                <div class="popup-title-sub">Student and Teenager</div>
            </div>
        </div>
        <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
        <div style="margin-bottom:1.2em;">
        Hi! I'm Yuruna, but you can call me Yuru. I...
        <ul>
            <li>love hsr and wuwa!</a></li>
            <li>do things</li>
            <li>am trying to learn how to code</li>
        </ul>
        <p><b>Curent Projects:</b>
        <ul>
        <li>This website</li>
        <li>My entry page for <a href="https://kuninaru.com/entry" target="_blank">Kuninaru</a></li>
        <li>My discord website for <a href="https://kuninaru.com/rules" target="_blank">Wren's World</a></li>
        </ul></p>
        interested in working with me? send me an email at <a href="mailto:hi@sharyap.com">xkaeriiii@gmail.com</a>! :)
        </div>
        <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
        <div class="about-education-block">
            <div class="about-education-title">EDUCATION</div>
            <div class="about-education-main">Intermediate Secondary School Certificate</div>
            <div class="about-education-note">(HOPEFULLY GRADUATING 2026)</div>
        </div>
        </div>
        <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
        <div style="margin-bottom:1.2em;">
        <b>OTHER INTERESTS:<b>
        <ul>
            <li>wuthering waves</li>
            <li>honkai star rail</li>
            <li>anime/manga</li>
            <li>music, singing and dancing</li>   
            <li>movies, books, series</li>
            <li>cats</li>
            <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
        <div class="about-education-block">
            <div class="about-language-title">LANGUAGE</div>
            <div class="about-language-main">I speak <a href="#" class="popup-title-link">english</a> and <a href="#" class="popup-title-link">german</a></div>
            <div class="about-language-note">I prefer speaking in english even while im native german</div>
        </div>
        </div>
        `
    },
    links: {
        title: 'links',
        content: `
        <div class="popup-links-grid">
            <a href="https://x.com/xkaerii" target="_blank" class="popup-link-item">
                <img src="assets/twitter.svg" alt="twitter"><span>twitter</span>
            </a>
            <a href="https://www.youtube.com/@xkaeri" target="_blank" class="popup-link-item">
                <img src="assets/youtube.svg" alt="youtube"><span>youtube</span>
            </a>
            <a href="https://discord.gg/DQQDsA22" target="_blank" class="popup-link-item">
                <img src="assets/discord.svg" alt="discord"><span>discord</span>
            </a>
            <a href="https://www.instagram.com/kittypaw_nya/?next=%2F" target="_blank" class="popup-link-item">
                <img src="assets/instagram.svg" alt="instagram"><span>instagram</span>
            </a>
            <a href="https://github.com/xkaeri" target="_blank" class="popup-link-item">
                <img src="assets/github.svg" alt="instagram"><span>github</span>
            </a>
        </div>
        <div class="popup-links-note">clicking any of the links will open a new tab!</div>
        `
    },
    work: {
        title: 'work',
        content: `
        <div class="skills-section">
            <div class="skills-highlight">
                <b>Accepting work offers via <a href="mailto:xkaeriiii@gmail.com" class="skills-link">my work email!</a></b><br>
                I do discord servers and moderating/managing your community. :)
            </div>
            <div class="skills-columns" style="margin-top:2em; display: flex; gap: 2.5rem; align-items: flex-start;">
                <div class="skills-col">
                    <div class="skills-title">TOOLS</div>
                    <div class="skills-list">
                        <span class="skills-chip">VStudio Code</span>
                    </div>
                </div>
                <div class="skills-col">
                    <div class="skills-title">DEVELOPMENT</div>
                    <div class="skills-list">
                        <span class="skills-chip">HTML</span>
                        <span class="skills-chip">CSS</span>
                        <span class="skills-chip">JavaScript</span>
                    </div>
                </div>
            </div>
            <div class="skills-title" style="margin-top:2em;">my work!</div>
            <div class="skills-desc">Projects</div>
            <div class="skills-gallery" id="work-gallery" style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; align-items: center; margin-top: 1.5em;">
                <span class="skills-note" style="min-width:220px; text-align:center;">This Website</span>
                <span class="skills-note" style="min-width:220px; text-align:center;">My entry <a href="https://kuninaru.com/entry" target="_blank">page</a></span>
            </div>
            <div class="skills-section-title">what i do</div>
            <div class="skills-list">
                <span class="skills-chip">Lorem ipsum dolor sit amet</span>
            </div>
            <div class="skills-note">Just send me an email, if you'd like to talk about what else I can do for you.</div>
        </div>
        `
    },
    faq: {
        title: 'frequently asked questions',
        content: `
        <div class="faq-list">
            <div class="faq-item">
                <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">what are your pronouns and gender?<span class="faq-arrow" style="float:right;">▾</span></button>
                <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                    <ul style="margin:0; padding-left:1.2em;"><li>I am a trans girl going by any/all pronouns although prefer she/her</li></ul>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">from where are you?<span class="faq-arrow" style="float:right;">▾</span></button>
                <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                    <ul style="margin:0; padding-left:1.2em;"><li>I am from germany!</li></ul>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">what's your setup?<span class="faq-arrow" style="float:right;">▾</span></button>
                <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                    <ul style="margin:0; padding-left:1.2em;"><li>I use a razer huntsman mini, razer deathadder v2 wireless and a logitech g435 wireless headset</li></ul>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">who are your favorite hsr characters?<span class="faq-arrow" style="float:right;">▾</span></button>
                <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                    <ul style="margin:0; padding-left:1.2em;"><li>My favorite honkai star rail characters are: Cipher, Acheron, Castorice and Dan Heng Imbibitor Lunae</li></ul>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">From where is your name?<span class="faq-arrow" style="float:right;">▾</span></button>
                <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                    <ul style="margin:0; padding-left:1.2em;"><li>my name and domain name is from this song <a href="https://www.youtube.com/watch?v=f6TytcA47rI&pp=ygUIa3VuaW5hcnU%3D">Kuninaru</a></li></ul>
                </div>
                </div>
            </div>
        </div>
        `
    },
    contact: {
        title: 'contact',
        content: `
        <div class="contact-cute">
            <div class="contact-cute-title">yayy mail!</div>
            <div class="contact-cute-desc">
                the easiest way to contact me is through email! i don't really check my social media dm's, so please direct questions to my email instead.</span>
            </div>
            <img src="assets/mail-chibi.png" alt="mail chibi" class="contact-cute-img">
            <div class="contact-cute-email">
                email me at: <a href="mailto:xkaeriiii@gmail.com">xkaeriiii@gmail.com</a><br>
                or press the button below to open your mail app.
            </div>
            <a href="mailto:xkaeriiii@gmail.com" class="contact-cute-btn">send me an email!</a>
        </div>
        `
    },
    // Add your friends here!
    "my loves": {
    title: 'my loves',
    content: `
    <div class="friends-list">
        <div class="friend-item">
            <img src="assets/avatars/asuyi.png" alt="Friend 1" class="friend-avatar">
            <div class="friend-info">
                <div class="friend-name">asuyi</div>
                <div class="friend-role">My best friend</div><br>
                <div class=friend-note>The person who helped me through alot and always makes me smile and laugh.</div><br>
            </div>
        </div>
        <div class="friend-item">
            <img src="assets/avatars/phantom.png" alt="Friend 2" class="friend-avatar">
            <div class="friend-info">
                <div class="friend-name">Phantom</div>
                <div class="friend-role">My bro</div><br>
                <div class="friend-note">A fun person to be around who is almost like my brother just without the blood relationship</div><br>
            </div>
        </div>
        <div class="friend-item">
            <img src="assets/avatars/sam.png" alt="Friend 3" class="friend-avatar">
            <div class="friend-info">
                <div class="friend-name">Samlami</div>
                <div class="friend-role">Twin</div><br>
                <div class="friend-note">My twin who is one of the nicest and kindest person, that i've ever met. I would forever be grateful for having her in my life</div>
            </div>
        </div>
                <div class="friend-item">
            <img src="assets/avatars/lemi.png" alt="Friend 3" class="friend-avatar">
            <div class="friend-info">
                <div class="friend-name">Lemi</div>
                <div class="friend-role">Close Friend</div><br>
                <div class="friend-note">A person who is very funny, kind and awesome. She is a great person and also a great artist</div>
            </div>
        </div>
                <div class="friend-item">
            <img src="assets/avatars/.png" alt="Friend 3" class="friend-avatar">
            <div class="friend-info">
                <div class="friend-name">TBA</div>
                <div class="friend-role">Close Friend</div>
                <div class="friend-note">Another fun person to be around</div>
            </div>
        </div>
        <div class="friends-note" style="margin-top:1.5em; text-align:center;">
            Want to be on this list? Be my friend and maybe you’ll end up here too :3
        </div>
    </div>
    `
},
    gacha: {
        title: 'gacha games',
        content: `
        <div class="gacha-section">
            <div class="gacha-intro">
                <b>Here are the gacha games I play!</b>
                <p>I also share my builds and info for each game below. Click a game to see more!</p>
            </div>
            <div class="gacha-list">
                <div class="gacha-game" data-game="hsr">
                    <img src="assets/games/hsr.png" alt="Honkai Star Rail">
                    <span>Honkai Star Rail</span>
                </div>
                <div class="gacha-game" data-game="wuwa">
                    <img src="assets/games/wuwa.png" alt="Wuthering Waves">
                    <span>Wuthering Waves</span>
                </div>
                <div class="gacha-game" data-game="genshin">
                    <img src="assets/games/genshin.png" alt="Genshin Impact">
                    <span>Genshin Impact</span>
                </div>
                <!-- Add more games as you like -->
            </div>
            <div id="gacha-builds" class="gacha-builds" style="margin-top:1.5em;"></div>
        </div>
        `
    },
};

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        playSound('sound-click');
        const key = link.querySelector('span').textContent.trim().toLowerCase();
        if (popupData[key]) {
            popupTitle.textContent = popupData[key].title;
            popupContent.innerHTML = popupData[key].content;
            popup.style.display = 'flex';
            if (key === 'faq') setupFAQAccordion();

            // --- Make friends popup a constant size ---
            if (key === 'my loves' || key === 'friends') {
                popup.style.width = '700px';
                popup.style.height = '500px';
                popup.style.minWidth = '700px';
                popup.style.maxWidth = '700px';
                popup.style.minHeight = '500px';
                popup.style.maxHeight = '500px';
                popup.style.resize = 'none';
            } else {
                popup.style.width = '';
                popup.style.height = '';
                popup.style.minWidth = '';
                popup.style.maxWidth = '';
                popup.style.minHeight = '';
                popup.style.maxHeight = '';
                popup.style.resize = '';
            }
        }
    });
});

popupClose.addEventListener('click', () => {
    playSound('sound-close');
    popup.style.display = 'none';
});

// FAQ accordion logic
// Popup for orange links (Ivory's Orchard & Chougakkou)
function bindPopupLinks() {
    document.querySelectorAll('.popup-title-link').forEach(link => {
        // Remove all previous event listeners by replacing with a new element
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
    });
    document.querySelectorAll('.popup-title-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            playSound('sound-click');
            const popupKey = link.getAttribute('data-popup');
            if (popupKey && popupData[popupKey]) {
                popupTitle.textContent = popupData[popupKey].title;
                popupContent.innerHTML = popupData[popupKey].content;
                popup.style.display = 'flex';
                // Re-bind links in the new popup content
                setTimeout(bindPopupLinks, 0);
            }
        });
    });
}

// Initial bind
window.addEventListener('DOMContentLoaded', bindPopupLinks);
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            faqItems.forEach(i => i.classList.remove('open'));
            // Open this one if it wasn't already open
            if (!isOpen) item.classList.add('open');
        });
    });
}


// Draggable popup
let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;
const header = popup.querySelector('.popup-header');
header.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = popup.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left;
    dragOffsetY = e.clientY - rect.top;
    document.body.style.userSelect = 'none';
    // --- Remove code that sets popup.style.width/height during drag ---
    // No resizing for friends popup, keep size constant
});
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    popup.style.left = `${e.clientX - dragOffsetX}px`;
    popup.style.top = `${e.clientY - dragOffsetY}px`;
    popup.style.transform = 'none';
});
document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
});

function openPopup(type) {
    // Common setup
    popup.style.display = 'flex';
    popupContent.innerHTML = ''; // Clear previous content
    popupTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize first letter

    // Specific settings for each popup type
    if (type === 'about') {
        popupContent.innerHTML = `
            <div class="popup-profile">
                <img src="assets/avatars/website-avatar.png" alt="avatar" class="popup-avatar">
                <div>
                    <div class="popup-title-main">Yuru <span style="font-size:1.2rem; color:#ffa726;"></span></div>
                    <div class="popup-title-sub">Student and Teenager</div>
                </div>
            </div>
            <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
            <div style="margin-bottom:1.2em;">
            Hi! I'm Yuruna, but you can call me Yuru. I...
            <ul>
                <li>love honkai star rail!</a></li>
                <li>do things</li>
                <li>am trying to learn how to code</li>
            </ul>
            <p><b>Curent Projects:</b>
            <ul>
            <li>This website</li>
            </ul></p>
            interested in working with me? send me an email at <a href="mailto:hi@sharyap.com">xkaeriiii@gmail.com</a>! :)
            </div>
            <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
            <div class="about-education-block">
                <div class="about-education-title">EDUCATION</div>
                <div class="about-education-main">Intermediate Secondary School Certificate</div>
                <div class="about-education-note">(HOPEFULLY GRADUATING 2026)</div>
            </div>
            </div>
            <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
            <div style="margin-bottom:1.2em;">
            <b>OTHER INTERESTS:<b>
            <ul>
                <li>anime/manga</li>
                <li>Legend of Zelda and Pokemon Franchise</li>
                <li>music, singing and dancing</li>   
                <li>movies, books, series</li>
                <li>the moon and stars</li>
                <li>cats</li>
                <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
            <div class="about-education-block">
                <div class="about-language-title">LANGUAGE</div>
                <div class="about-language-main">I speak <a href="#" class="popup-title-link">english</a> and <a href="#" class="popup-title-link">german</a></div>
                <div class="about-language-note">I prefer speaking in english even while im native german</div>
            </div>
            </div>
            `;
    } else if (type === 'links') {
        popupContent.innerHTML = `
            <div class="popup-links-grid">
                <a href="https://x.com/xkaerii" target="_blank" class="popup-link-item">
                    <img src="assets/twitter.svg" alt="twitter"><span>twitter</span>
                </a>
                <a href="https://www.youtube.com/@xkaeri" target="_blank" class="popup-link-item">
                    <img src="assets/youtube.svg" alt="youtube"><span>youtube</span>
                </a>
                <a href="https://discord.gg/DQQDsA22" target="_blank" class="popup-link-item">
                    <img src="assets/discord.svg" alt="discord"><span>discord</span>
                </a>
                <a href="https://www.instagram.com/kittypaw_nya/?next=%2F" target="_blank" class="popup-link-item">
                    <img src="assets/instagram.svg" alt="instagram"><span>instagram</span>
                </a>
                <a href="https://github.com/xkaeri" target="_blank" class="popup-link-item">
                    <img src="assets/github.svg" alt="instagram"><span>github</span>
                </a>
            </div>
            <div class="popup-links-note">clicking any of the links will open a new tab!</div>
        `;
    } else if (type === 'work') {
        popupContent.innerHTML = `
            <div class="skills-section">
                <div class="skills-highlight">
                    <b>Accepting work offers via <a href="mailto:xkaeriiii@gmail.com" class="skills-link">my work email!</a></b><br>
                    I do discord servers and moderating/managing your community. :)
                </div>
                <div class="skills-columns" style="margin-top:2em; display: flex; gap: 2.5rem; align-items: flex-start;">
                    <div class="skills-col">
                        <div class="skills-title">TOOLS</div>
                        <div class="skills-list">
                            <span class="skills-chip">VStudio Code</span>
                        </div>
                    </div>
                    <div class="skills-col">
                        <div class="skills-title">DEVELOPMENT</div>
                        <div class="skills-list">
                            <span class="skills-chip">HTML</span>
                            <span class="skills-chip">CSS</span>
                            <span class="skills-chip">JavaScript</span>
                        </div>
                    </div>
                </div>
                <div class="skills-title" style="margin-top:2em;">my work!</div>
                <div class="skills-desc">Projects</div>
                <div class="skills-gallery" id="work-gallery" style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; align-items: center; margin-top: 1.5em;">
                    <span class="skills-note" style="min-width:220px; text-align:center;">This Website</span>
                    <span class="skills-note" style="min-width:220px; text-align:center;">My entry <a href="https://kuninaru.com/entry" target="_blank">page</a></span>
                </div>
                <div class="skills-section-title">what i do</div>
                <div class="skills-list">
                    <span class="skills-chip">Lorem ipsum dolor sit amet</span>
                </div>
                <div class="skills-note">Just send me an email, if you'd like to talk about what else I can do for you.</div>
            </div>
        `;
    } else if (type === 'faq') {
        popupContent.innerHTML = `
            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">what are your pronouns and gender?<span class="faq-arrow" style="float:right;">▾</span></button>
                    <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                        <ul style="margin:0; padding-left:1.2em;"><li>I am a trans girl going by any/all pronouns although prefer she/her</li></ul>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">from where are you?<span class="faq-arrow" style="float:right;">▾</span></button>
                    <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                        <ul style="margin:0; padding-left:1.2em;"><li>I am from germany!</li></ul>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">what's your setup?<span class="faq-arrow" style="float:right;">▾</span></button>
                    <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                        <ul style="margin:0; padding-left:1.2em;"><li>I use a razer huntsman mini, razer deathadder v2 wireless and a logitech g435 wireless headset</li></ul>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">who are your favorite hsr characters?<span class="faq-arrow" style="float:right;">▾</span></button>
                    <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                        <ul style="margin:0; padding-left:1.2em;"><li>My favorite honkai star rail characters are: Cipher, Acheron, Castorice and Dan Heng Imbibitor Lunae</li></ul>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question" style="background:#fff8e1; color:#222; border:none; width:100%; text-align:left; padding:1em 1.2em; font-family:inherit; font-size:1.1rem; font-weight:600; border-radius:6px 6px 0 0; box-shadow:none; outline:none; cursor:pointer;">From where is your name?<span class="faq-arrow" style="float:right;">▾</span></button>
                    <div class="faq-answer" style="background:transparent !important; color:#222; padding:1.2em 1.5em; border-radius:0 0 6px 6px; border-top:1px solid #f5e6b8; font-size:1.05rem; margin-top:-2px;">
                        <ul style="margin:0; padding-left:1.2em;"><li>my name and domain name is from this song <a href="https://www.youtube.com/watch?v=f6TytcA47rI&pp=ygUIa3VuaW5hcnU%3D">Kuninaru</a></li></ul>
                    </div>
                    </div>
                </div>
            </div>
        `;
    } else if (type === 'contact') {
        popupContent.innerHTML = `
            <div class="contact-cute">
                <div class="contact-cute-title">yayy mail!</div>
                <div class="contact-cute-desc">
                    the easiest way to contact me is through email! i don't really check my social media dm's, so please direct questions to my email instead.</span>
                </div>
                <img src="assets/mail-chibi.png" alt="mail chibi" class="contact-cute-img">
                <div class="contact-cute-email">
                    email me at: <a href="mailto:xkaeriiii@gmail.com">xkaeriiii@gmail.com</a><br>
                    or press the button below to open your mail app.
                </div>
                <a href="mailto:xkaeriiii@gmail.com" class="contact-cute-btn">send me an email!</a>
            </div>
        `;
    }

    // Adjust popup size based on type
    if (type === 'friends') {
        popup.style.width = '90vw';
        popup.style.height = '70vh';
        popup.style.minWidth = '320px';
        popup.style.maxWidth = '98vw';
        popup.style.minHeight = '200px';
        popup.style.maxHeight = '90vh';
    } else {
        popup.style.width = '';
        popup.style.height = '';
        popup.style.minWidth = '';
        popup.style.maxWidth = '';
        popup.style.minHeight = '';
        popup.style.maxHeight = '';
    }
}

// Remove any code that sets popup.style.width/height during drag!
// --- Nested Popout/Modal Logic ---
// Create a nested modal element (only once)
let nestedModal = document.getElementById('nested-modal');
if (!nestedModal) {
    nestedModal = document.createElement('div');
    nestedModal.id = 'nested-modal';
    nestedModal.style.position = 'fixed';
    nestedModal.style.top = '0';
    nestedModal.style.left = '0';
    nestedModal.style.width = '100vw';
    nestedModal.style.height = '100vh';
    nestedModal.style.background = 'rgba(0,0,0,0.7)';
    nestedModal.style.display = 'none';
    nestedModal.style.alignItems = 'center';
    nestedModal.style.justifyContent = 'center';
    nestedModal.style.zIndex = '3000';
    nestedModal.innerHTML = `
        <div id="nested-modal-content" style="background:#fff; color:#222; border-radius:12px; box-shadow:0 4px 32px #222; padding:2em; min-width:300px; min-height:120px; max-width:90vw; max-height:80vh; position:relative; display:flex; flex-direction:column; align-items:center;">
            <div id="nested-modal-title" style="font-size:1.3rem; font-weight:bold; margin-bottom:1em;">Nested Popout</div>
            <div id="nested-modal-body">This is a nested popout/modal! You can put anything here.</div>
            <button id="nested-modal-close" style="margin-top:2em; background:#222; color:#fff; border:none; font-size:1.1rem; border-radius:6px; padding:0.5em 1.5em; cursor:pointer;">Close</button>
        </div>
    `;
    document.body.appendChild(nestedModal);
}

// Show/hide functions for nested modal
function showNestedModal(title, content) {
    document.getElementById('nested-modal-title').textContent = title || 'Nested Popout';
    document.getElementById('nested-modal-body').innerHTML = content || 'This is a nested popout/modal!';
    nestedModal.style.display = 'flex';
}
function hideNestedModal() {
    nestedModal.style.display = 'none';
}
document.getElementById('nested-modal-close').addEventListener('click', hideNestedModal);
nestedModal.addEventListener('click', e => {
    if (e.target === nestedModal) hideNestedModal();
});

// Add a trigger button for the nested popout only in the 'about' popup
// Make the orange text in the about popup trigger the nested popout
function bindAboutNestedPopoutTriggers() {
    if (popupTitle.textContent.trim().toLowerCase() === 'about me') {
        // Find the orange links (popup-title-link) in the about popup
        const aboutLinks = popupContent.querySelectorAll('.popup-title-link');
        aboutLinks.forEach(link => {
            // Remove previous event listeners by replacing with a clone
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });
        // Add event listeners to new links
        popupContent.querySelectorAll('.popup-title-link').forEach(link => {
            newLinkHandler(link);
        });
    }
}


// --- Nested popout content map for about popup links ---
const aboutNestedPopoutContent = {
    "english": {
        title: "More about English",
        content: `<div style="text-align:center;">I'm pretty proud of my English and use it for most of my online communication.<br>Feel free to chat with me in English at any time!</div>`
    },
    "german": {
        title: "More about German",
        content: `<div style="text-align:center;">German is my native language as I was born, raised and still live in germany! but I prefer English for most things.
        <br>Ich spreche auch Deutsch! Ich mag es aber mehr, wenn man mit mir Englisch spricht!</div>`
    }
    // Add more entries as needed
};

function newLinkHandler(link) {
    // If the link is in the about popup, make it trigger the nested popout
    link.addEventListener('click', function(e) {
        e.preventDefault();
        playSound('sound-click');
        const key = link.textContent.trim();
        if (aboutNestedPopoutContent[key]) {
            showNestedModal(aboutNestedPopoutContent[key].title, aboutNestedPopoutContent[key].content);
        } else {
            showNestedModal('More about ' + key, 'This is a nested popout/modal for <b>' + key + '</b>! You can put anything here.');
        }
    });
}

// Call bindAboutNestedPopoutTriggers after about popup opens
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        setTimeout(bindAboutNestedPopoutTriggers, 0);
    });
});

// --- Sound Effects for Entire Website ---
// Add more sound elements if needed
if (!document.getElementById('sound-hover')) {
    const hoverAudio = document.createElement('audio');
    hoverAudio.id = 'sound-hover';
    hoverAudio.src = 'assets/hover.mp3';
    hoverAudio.preload = 'auto';
    document.body.appendChild(hoverAudio);
}
if (!document.getElementById('sound-success')) {
    const successAudio = document.createElement('audio');
    successAudio.id = 'sound-success';
    successAudio.src = 'assets/success.mp3';
    successAudio.preload = 'auto';
    document.body.appendChild(successAudio);
}
// Play sound utility (already defined as playSound)
// Add hover sound to all buttons and links
function addHoverSounds() {
    const hoverables = document.querySelectorAll('button, a, .nav-icons a, .faq-question, .contact-cute-btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => playSound('sound-hover'));
    });
}
// Play success sound on email send button
function addSuccessSound() {
    const emailBtn = document.querySelector('.contact-cute-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => playSound('sound-success'));
    }
}
// Call these after popup opens
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        playSound('sound-click');
        const key = link.querySelector('span').textContent.trim().toLowerCase();
        if (popupData[key]) {
            popupTitle.textContent = popupData[key].title;
            popupContent.innerHTML = popupData[key].content;
            popup.style.display = 'flex';
            if (key === 'faq') setupFAQAccordion();
            addHoverSounds();
            addSuccessSound();
        }
    });
});
// Also add hover sounds on page load
window.addEventListener('DOMContentLoaded', () => {
    addHoverSounds();
});

// --- Work Gallery Modal ---
function setupWorkGalleryModal() {
    const gallery = document.getElementById('work-gallery');
    if (!gallery) return;
    const modalId = 'work-modal';
    let modal = document.getElementById(modalId);
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.85)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '2000';
        modal.style.flexDirection = 'column';
        modal.style.transition = 'opacity 0.2s';
        modal.innerHTML = `
            <img id="work-modal-img" style="max-width:80vw; max-height:80vh; border-radius:10px; box-shadow:0 4px 32px #222; background:#222;" />
            <div id="work-modal-caption" style="color:#fff; margin-top:1.2rem; font-size:1.15rem; text-align:center;"></div>
            <button id="work-modal-close" style="margin-top:1.5rem; background:#222; color:#fff; border:none; font-size:1.5rem; border-radius:6px; padding:0.5em 1.5em; cursor:pointer;">[ x ]</button>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'none';
    }
    const modalImg = document.getElementById('work-modal-img');
    const modalCaption = document.getElementById('work-modal-caption');
    const modalClose = document.getElementById('work-modal-close');
    gallery.querySelectorAll('.work-thumb').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            modalImg.src = link.href;
            modalCaption.innerHTML = link.getAttribute('data-caption') || '';
            modal.style.display = 'flex';
        });
    });
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// Call setupWorkGalleryModal after popup opens
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        playSound('sound-click');
        const key = link.querySelector('span').textContent.trim().toLowerCase();
        if (popupData[key]) {
            popupTitle.textContent = popupData[key].title;
            popupContent.innerHTML = popupData[key].content;
            popup.style.display = 'flex';
            if (key === 'faq') setupFAQAccordion();
            if (key === 'work') setupWorkGalleryModal();
        }
    });
});

// Gacha Games Section 
function bindGachaGameClicks() {
    const gachaGames = document.querySelectorAll('.gacha-game');
    const buildsDiv = document.getElementById('gacha-builds');
    if (!gachaGames.length || !buildsDiv) return;

    // Example builds/info for each game
    const buildsData = {
        hsr: `
            <h3>Honkai Star Rail</h3>
            <ul>
                <li><b>Main:</b> Acheron (Lightning Nihility)</li>
                <li><b>Build:</b> Crit DMG/ATK, Nihility Rope, Inert Salsotto</li>
                <li><b>Other units:</b> Dan Heng IL, Kafka, Silver Wolf</li>
            </ul>
        `,
        wuwa: `
            <h3>Wuthering Waves</h3>
            <ul>
                <li><b>Main:</b> Jiyan</li>
                <li><b>Build:</b> Crit Rate/ATK, Wind Set, Resonator 5</li>
                <li><b>Other units:</b> Calcharo, Verina</li>
            </ul>
        `,
        genshin: `
            <h3>Genshin Impact</h3>
            <ul>
                <li><b>Main:</b> Raiden Shogun</li>
                <li><b>Build:</b> Emblem 4pc, Crit Rate/ATK, Eng Recharge</li>
                <li><b>Other units:</b> Nahida, Yelan, Xingqiu</li>
            </ul>
        `
    };

    gachaGames.forEach(game => {
        game.addEventListener('click', () => {
            const key = game.getAttribute('data-game');
            buildsDiv.innerHTML = buildsData[key] || '<i>No info yet!</i>';
        });
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        playSound('sound-click');
        const key = link.querySelector('span').textContent.trim().toLowerCase();
        if (popupData[key]) {
            popupTitle.textContent = popupData[key].title;
            popupContent.innerHTML = popupData[key].content;
            popup.style.display = 'flex';
            if (key === 'faq') setupFAQAccordion();
            if (key === 'gacha') {
                setTimeout(bindGachaGameClicks, 50); // Wait for DOM update
            }
        }
    });
});



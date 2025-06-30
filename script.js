// Theme toggle
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '🌞';
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
    muteBtn.textContent = muteBtn.textContent === '🔈' ? '🔇' : '🔈';
    isMuted = muteBtn.textContent === '🔇';
});
function playSound(id) {
    if (isMuted) return;
    const audio = document.getElementById(id);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

// Popup/modal logic
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-close');
const navLinks = document.querySelectorAll('.nav-icons a');

const popupData = {
    about: {
        title: 'about me',
        content: `
        <div class="popup-profile">
            <img src="assets/avatar.png" alt="avatar" class="popup-avatar">
            <div>
                <div class="popup-title-main">Kari <span style="font-size:1.2rem; color:#ffa726;"></span></div>
                <div class="popup-title-sub">Freetime discord admin/moderator</div>
                <div class="popup-title-sub">Former admin for <a href="#" class="popup-title-link">Ivory's Orchard</a></div>
                <div class="popup-title-sub">Former mod for <a href="#" class="popup-title-link">Chougakkou</a></div>
            </div>
        </div>
        <div style="border-top:1px solid #eee; margin:1.2em 0;"></div>
        <div style="margin-bottom:1.2em;">
        hi! i'm kari, a discord admin/moderator. i...
        <ul>
            <li>moderate servers</a></li>
            <li>setup discord servers, bots and webhooks</li>
            <li>do server websites such as: <a href="https://just-kaboodle.vercel.app/about.html" target="_blank" class="popup-link_item">just-kaboodle.vercel.app</a> this was never released and was something i did in my free time</li>
            <li>am learning how to code</li>
        </ul>
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
            <li>games such as: Metal Hellsinger, Minecraft, Osu!</li>
            <li>music, singing and dancing</li>   
            <li>movies, books, series</li>
            <li>the moon and stars</li>
            <li>cats</li>
            <li>Legend of Zelda and Pokemon Franchise</li>
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
            <a href="https://discord.com/" target="_blank" class="popup-link-item">
                <img src="assets/discord.svg" alt="discord"><span>discord</span>
            </a>
            <a href="https://www.instagram.com/kittypaw_nya/?next=%2F" target="_blank" class="popup-link-item">
                <img src="assets/instagram.svg" alt="instagram"><span>instagram</span>
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
                        <span class="skills-chip">Discord</span>
                        <span class="skills-chip">Webhook.org</span>
                        <span class="skills-chip">VStudio Code</span>
                        <span class="skills-chip">Google Docs</span>
                    </div>
                </div>
                <div class="skills-col">
                    <div class="skills-title">DEVELOPMENT</div>
                    <div class="skills-list">
                        <span class="skills-chip">HTML/CSS</span>
                    </div>
                </div>
            </div>
            <div class="skills-title" style="margin-top:2em;">my work!</div>
            <div class="skills-desc">here are some of the servers that i have moderated/managed or have redesiginged.</div>
            <div class="skills-gallery" id="work-gallery" style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; align-items: center; margin-top: 1.5em;">
                <span class="skills-note" style="min-width:220px; text-align:center;">Ivory's Orchard</span>
                <span class="skills-note" style="min-width:220px; text-align:center;">Chougakkou</span>
                <span class="skills-note" style="min-width:220px; text-align:center;">Claramiles Community Discord</span>
                <span class="skills-note" style="min-width:220px; text-align:center;">sic92 Community Discord</span>
            </div>
            <div class="skills-section-title">what i do</div>
            <div class="skills-list">
                <span class="skills-chip">Discord Server setup</span>
                <span class="skills-chip">Discord Bot's setup</span>
                <span class="skills-chip">Server Websites for your discord server</span>
                <span class="skills-chip">moderating your community/discord server</span>
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
                <button class="faq-question">what software do you use?<span class="faq-arrow">▾</span></button>
                <div class="faq-answer">visual studio code, webhook.org and various different free copy emote websites.</div>
            </div>
            <div class="faq-item">
                <button class="faq-question">do you do commissions?<span class="faq-arrow">▾</span></button>
                <div class="faq-answer">I do <b>not</b>!</div>
            </div>
            <div class="faq-item">
                <button class="faq-question">what's your setup?<span class="faq-arrow">▾</span></button>
                <div class="faq-answer">I use a razer huntsman mini, razer deathadder v2 wireless and a logitech g435 wireless headset</div>
            </div>
            <div class="faq-item">
                <button class="faq-question">are you currently moderating any server?<span class="faq-arrow">▾</span></button>
                <div class="faq-answer">I am not, but I would like to manage/moderate again.</div>
            </div>
            <div class="faq-item">
                <button class="faq-question">can i ask you questons about discord?<span class="faq-arrow">▾</span></button>
                <div class="faq-answer">definitely, i love to talk about discord!</div>
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
        }
    });
});

popupClose.addEventListener('click', () => {
    playSound('sound-close');
    popup.style.display = 'none';
});

// FAQ accordion logic
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

const navs = {
    Home : `<svg width="64px" height="64px" viewBox="-14.4 -14.4 52.80 52.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    Explore : `<svg width="64px" height="64px" viewBox="-14 -14 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>`,
    Notifications : `<svg width="64px" height="64px" viewBox="-21.6 -21.6 67.20 67.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    Messages : `<svg width="64px" height="64px" viewBox="-19.2 -19.2 62.40 62.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    Lists : `<svg fill="#000000" width="64px" height="64px" viewBox="-128 -128 384.00 384.00" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000" stroke-width="2.56"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.512"></g><g id="SVGRepo_iconCarrier"> <g> <rect height="8" width="60" x="34" y="60"></rect> <rect height="8" width="60" x="34" y="42"></rect> <rect height="8" width="60" x="34" y="78"></rect> <path d="M1,127h126V1H1V127z M9,9h110v110H9V9z"></path> </g> </g></svg>`,
    Bookmarks : `<svg width="64px" height="64px" viewBox="-19.2 -19.2 62.40 62.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path> </g></svg>`,
    Communities : `<svg width="64px" height="64px" viewBox="-14 -14 56.00 56.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="nonw" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_people_community_28_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="black" stroke-width="1.3" fill="none" fill-rule="evenodd"> <g id="ic_fluent_people_community_28_filled" fill="none" fill-rule="nonzero"> <path d="M17.75,18 C18.7164983,18 19.5,18.7835017 19.5,19.75 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,19.75 C8.5,18.7835017 9.28350169,18 10.25,18 L17.75,18 Z M18.2439108,11.9999135 L24.25,12 C25.2164983,12 26,12.7835017 26,13.75 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.3985759,19.007437 C20.0900029,17.9045277 19.1110503,17.0815935 17.9288034,17.0057197 L17.75,17 L16.8277704,17.0007255 C17.8477843,16.1757619 18.5,14.9140475 18.5,13.5 C18.5,12.9740145 18.4097576,12.4691063 18.2439108,11.9999135 Z M3.75,12 L9.75608915,11.9999135 C9.59024243,12.4691063 9.5,12.9740145 9.5,13.5 C9.5,14.8308682 10.0777413,16.0267978 10.996103,16.8506678 L11.1722296,17.0007255 L10.25,17 C8.9877951,17 7.92420242,17.85036 7.60086562,19.0094363 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,13.75 C2,12.7835017 2.78350169,12 3.75,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>`,
    Premium : `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0,0,256,256">
    <g transform="translate(70.4,70.4) scale(0.45,0.45)"><g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path></g></g></g>
    </svg>`,
    Profile : `<svg fill="#000000" width="64px" height="64px" viewBox="-24 -24 80.00 80.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="about"> <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path> <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" fill="#000000"></path> </g> </g></svg>`,
    More : `<svg class="more" width="64px" height="64px" viewBox="-16.8 -16.8 57.60 57.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H8.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12H12.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 12H16.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"></path> </g></svg>`,
}

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const src = Object.values(navs);
const title = Object.keys(navs);

function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function createNavbar(src, title){
    const a = document.createElement('a');
    a.href = "#";
    a.className = 'item-nav';
    a.innerHTML = `
    <div class="wrap-item-content">
        ${src}
        <div class="title">${title}</div>
    </div>`;
    nav.appendChild(a);
}

for (let i=0;i<src.length;i++){
    createNavbar(src[i], title[i]);
}
window.addEventListener('DOMContentLoaded',()=>{
    createToolsPost();

    const itemNav = document.querySelectorAll('.item-nav');
    itemNav.forEach((item,index) =>{
        if(index >= 0 && index < 4){
            item.classList.add("mobile");
        }else{
            item.classList.remove("mobile");
        }
    })
})

// fungsi untuk auto grow height dari text area sesuai panjang dari text yang diinput
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

// bagian input textarea
const form = document.querySelectorAll('.form-input');
const submitBtn = document.querySelectorAll('.submit');
const textArea = document.querySelectorAll('.input');

const submitAct = {
    active : ()=>{
        submitBtn.forEach(item =>{
            item.removeAttribute('disabled');
            item.style.opacity = 1;
        })
    },
    disable: ()=>{
        submitBtn.forEach(item =>{
            item.setAttribute('disabled', '');
            item.style.opacity = 0.6;
        })
    }
}

let getValueCaption;
form.forEach(item => {
    item.addEventListener('submit', (e)=>{
        e.preventDefault();
        createPost('img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg','BangDream','Bangg_',getValueCaption,'img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg');
        textArea.value = "";
        submitAct.disable();
        document.querySelector('.modal-form').classList.remove('active');
        document.querySelector('body').classList.remove('stop-scrolling');
        textArea.forEach(item => item.value = "");
    })
    
})
const wrapPrivacy = document.querySelectorAll('.wrap-privacy');
wrapPrivacy.forEach(item =>{
    textArea.forEach((e) =>{
        e.addEventListener('click', ()=>{
            item.classList.add('show');
        })
    })
})
textArea.forEach(item =>{
    item.addEventListener('input', (event)=>{
        const target = event.currentTarget;
        const currentLength = target.value.length;
        getValueCaption = target.value;
        if(currentLength < 1){
            submitAct.disable();
        }else{
            submitAct.active();
        }
    })
})

createPost('img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg','BangDream','Bangg_','halooo banggggg','img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg');
createPost('img/user1.jpg','Halal Nation','HalalNation_','I stand with Palestine.','img/iStandWPalestine.jpeg');
// template box post
function createPost(pp,username, userID,caption,picture = none){
    function element(){
        return `<div class="post">
        <div class="wrap-post">
            <div class="photo-profil"><img src="${pp}" alt=""></div>
            <div class="content-post">
                <div class="username">
                    <p>${username}</p>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z" fill="#1ea5ff"></path> </g></svg>
                    <div class="user-id">@${userID}</div>
                </div>
                <div class="caption"><p>${caption}</p></div>
                <div class="picture"><img src="${picture}" alt=""></div>
                <div class="insight">
                    <a href="#">
                        <div>
                            <svg fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.014 512.014" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256.014,64.007c-141.163,0-256,86.144-256,192c0,46.72,22.187,91.008,62.805,125.973L4.003,429.02 c-3.541,2.837-4.907,7.595-3.392,11.861c1.515,4.267,5.547,7.125,10.069,7.125h245.333c141.163,0,256-86.144,256-192 S397.176,64.007,256.014,64.007z M256.014,426.673H41.102l45.376-36.309c2.581-2.048,4.053-5.163,4.011-8.448 s-1.579-6.379-4.181-8.363c-41.899-32-64.96-73.728-64.96-117.547c0-94.101,105.28-170.667,234.667-170.667 S490.68,161.905,490.68,256.007S385.4,426.673,256.014,426.673z"></path> </g> </g> </g></svg>
                            <p>838</p>
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 24 24" id="repost-2" xmlns="http://www.w3.org/2000/svg" class="icon line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline id="primary" points="8 12 6 14 4 12" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline><path id="primary-2" data-name="primary" d="M18,6V4a1,1,0,0,0-1-1H7A1,1,0,0,0,6,4V14" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><polyline id="primary-3" data-name="primary" points="16 12 18 10 20 12" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline><path id="primary-4" data-name="primary" d="M6,18v2a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V10" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></g></svg>
                            <p>2.1K</p>
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Zm-.674,6.28C19.08,14.74,13.658,18.322,12,19.34c-2.336-1.41-7.142-4.95-7.821-8.451-.513-2.646.189-4.183.869-5.007A3.819,3.819,0,0,1,8,4.5a3.493,3.493,0,0,1,3.115,1.469,1.005,1.005,0,0,0,1.76.011A3.489,3.489,0,0,1,16,4.5a3.819,3.819,0,0,1,2.959,1.382C19.637,6.706,20.339,8.243,19.826,10.889Z"></path></g></svg>
                            <p>16K</p>
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <svg fill="#000000" width="15px" height="15px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>align-left-text-line</title> <path d="M20.25,26H6v2.2H20.25a1.1,1.1,0,0,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M28,20H6v2.2H28A1.1,1.1,0,0,0,28,20Z" class="clr-i-outline clr-i-outline-path-2"></path><path d="M22.6,15.1A1.1,1.1,0,0,0,21.5,14H6v2.2H21.5A1.1,1.1,0,0,0,22.6,15.1Z" class="clr-i-outline clr-i-outline-path-3"></path><path d="M29.25,8H6v2.2H29.25a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-4"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
                            <p>2.1M</p>
                        </div>
                    </a>
                    <div class="save-upload">
                        <a href="#">
                            <div>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85665 2.30447C8.2922 2.16896 10.3981 2 12 2C13.6019 2 15.7078 2.16896 17.1433 2.30447C18.4976 2.4323 19.549 3.51015 19.6498 4.85178C19.7924 6.74918 20 9.90785 20 12.2367C20 14.022 19.8781 16.2915 19.7575 18.1035C19.697 19.0119 19.6365 19.8097 19.5911 20.3806C19.5685 20.6661 19.5496 20.8949 19.5363 21.0526L19.5209 21.234L19.5154 21.2966L19.5153 21.2976C19.5153 21.2977 19.5153 21.2977 18.7441 21.2308L19.5153 21.2976C19.4927 21.5553 19.3412 21.7845 19.1122 21.9075C18.8831 22.0305 18.6072 22.0309 18.3779 21.9085L12.1221 18.5713C12.0458 18.5307 11.9542 18.5307 11.8779 18.5713L5.62213 21.9085C5.39277 22.0309 5.11687 22.0305 4.88784 21.9075C4.65881 21.7845 4.50732 21.5554 4.48466 21.2977L5.25591 21.2308C4.48466 21.2977 4.48467 21.2978 4.48466 21.2977L4.47913 21.234L4.46371 21.0526C4.45045 20.8949 4.43154 20.6661 4.40885 20.3806C4.3635 19.8097 4.30303 19.0119 4.24255 18.1035C4.12191 16.2915 4 14.022 4 12.2367C4 9.90785 4.20763 6.74918 4.3502 4.85178C4.45102 3.51015 5.50236 2.4323 6.85665 2.30447ZM5.93179 19.9971L11.1455 17.2159C11.6791 16.9312 12.3209 16.9312 12.8545 17.2159L18.0682 19.9971C18.1101 19.4598 18.1613 18.7707 18.2124 18.0019C18.3327 16.1962 18.4516 13.9687 18.4516 12.2367C18.4516 9.97099 18.2482 6.86326 18.1057 4.96632C18.0606 4.366 17.5938 3.89237 16.9969 3.83603C15.5651 3.70088 13.5225 3.53846 12 3.53846C10.4775 3.53846 8.43487 3.70088 7.00309 3.83603C6.40624 3.89237 5.9394 4.366 5.89429 4.96632C5.75175 6.86326 5.54839 9.97099 5.54839 12.2367C5.54839 13.9687 5.66734 16.1962 5.78756 18.0019C5.83874 18.7707 5.88993 19.4598 5.93179 19.9971Z" fill="#000000"></path> </g></svg>
                            </div>
                        </a>
                        <a href="#">
                            <div>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#000"></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#000"></path> </g></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    const mainContent = document.querySelector('.main-content');
    const wrapMainContent = document.querySelector('.wrap-main-content');
    const post = document.querySelector('.post');
    mainContent.insertBefore(htmlToElement(element()), post);
    // mainContent.appendChild(htmlToElement(element()));
}

// membuat tools untuk posting pada main header
const tools = document.querySelector('.tools');
function createToolsPost(){
    function element(){
        return `<div class="svg-tools">
        <a href="#">
            <svg width="10px" height="10px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:#1ea5ff;}</style> </defs> <title></title> <g data-name="Layer 6" id="Layer_6"> <path class="cls-1" d="M5,5V27H27V5ZM25,7V17.83l-3.5-3.25-5.71,6.33L12,18.83,7,23.65V7ZM8.49,25l3.86-3.71,3.86,2.13,5.41-6L25,20.56V25Z"></path> <rect class="cls-1" height="2" width="1.81" x="11.06" y="15"></rect> </g> </g></svg>
        </a>
        <a href="#">
        <svg width="9px" height="9px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.61 21.71H6.39C5.29996 21.71 4.25456 21.277 3.48379 20.5062C2.71302 19.7354 2.28 18.69 2.28 17.6V6.38C2.28 5.28996 2.71302 4.24457 3.48379 3.4738C4.25456 2.70302 5.29996 2.27 6.39 2.27H17.61C18.7 2.27 19.7454 2.70302 20.5162 3.4738C21.287 4.24457 21.72 5.28996 21.72 6.38V17.6C21.72 18.69 21.287 19.7354 20.5162 20.5062C19.7454 21.277 18.7 21.71 17.61 21.71ZM6.39 3.77C5.69778 3.77 5.03392 4.04499 4.54445 4.53446C4.05498 5.02393 3.78 5.68779 3.78 6.38V17.6C3.78 18.2922 4.05498 18.9561 4.54445 19.4456C5.03392 19.935 5.69778 20.21 6.39 20.21H17.61C18.3022 20.21 18.9661 19.935 19.4555 19.4456C19.945 18.9561 20.22 18.2922 20.22 17.6V6.38C20.22 5.68779 19.945 5.02393 19.4555 4.53446C18.9661 4.04499 18.3022 3.77 17.61 3.77H6.39Z" fill="#1ea5ff"></path> <path d="M7.86 14.9C7.09087 14.9 6.35325 14.5945 5.80939 14.0506C5.26553 13.5068 4.96 12.7691 4.96 12C4.96 11.2309 5.26553 10.4933 5.80939 9.9494C6.35325 9.40554 7.09087 9.10001 7.86 9.10001C8.05891 9.10001 8.24968 9.17902 8.39033 9.31968C8.53098 9.46033 8.61 9.65109 8.61 9.85001C8.61 10.0489 8.53098 10.2397 8.39033 10.3803C8.24968 10.521 8.05891 10.6 7.86 10.6C7.61706 10.6014 7.37866 10.6659 7.16823 10.7873C6.9578 10.9087 6.78259 11.0828 6.65981 11.2924C6.53703 11.5021 6.47091 11.74 6.46796 11.983C6.465 12.2259 6.52531 12.4654 6.64296 12.6779C6.76061 12.8905 6.93154 13.0688 7.13895 13.1953C7.34637 13.3218 7.58313 13.3921 7.82596 13.3994C8.06879 13.4066 8.30934 13.3506 8.52395 13.2367C8.73856 13.1229 8.91985 12.9551 9.05 12.75H8.59C8.39109 12.75 8.20032 12.671 8.05967 12.5303C7.91902 12.3897 7.84 12.1989 7.84 12C7.84 11.8011 7.91902 11.6103 8.05967 11.4697C8.20032 11.329 8.39109 11.25 8.59 11.25H10C10.1981 11.2526 10.3874 11.3324 10.5275 11.4725C10.6676 11.6126 10.7474 11.8019 10.75 12C10.7474 12.7666 10.4424 13.5012 9.90125 14.0442C9.36012 14.5872 8.62658 14.8947 7.86 14.9Z" fill="#1ea5ff"></path> <path d="M12.65 14.89C12.5511 14.8914 12.453 14.8729 12.3614 14.8357C12.2698 14.7984 12.1866 14.7433 12.1167 14.6733C12.0468 14.6034 11.9916 14.5202 11.9544 14.4286C11.9171 14.337 11.8987 14.2389 11.9 14.14V9.84001C11.9 9.6411 11.979 9.45033 12.1197 9.30968C12.2603 9.16903 12.4511 9.09001 12.65 9.09001C12.8489 9.09001 13.0397 9.16903 13.1803 9.30968C13.321 9.45033 13.4 9.6411 13.4 9.84001V14.14C13.4 14.3389 13.321 14.5297 13.1803 14.6703C13.0397 14.811 12.8489 14.89 12.65 14.89Z" fill="#1ea5ff"></path> <path d="M15.33 14.9C15.1319 14.8974 14.9426 14.8176 14.8025 14.6775C14.6624 14.5374 14.5826 14.3481 14.58 14.15V9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001C15.5289 9.10001 15.7197 9.17902 15.8603 9.31968C16.001 9.46033 16.08 9.65109 16.08 9.85001V14.15C16.08 14.2485 16.0606 14.346 16.0229 14.437C15.9852 14.528 15.93 14.6107 15.8603 14.6803C15.7907 14.75 15.708 14.8052 15.617 14.8429C15.526 14.8806 15.4285 14.9 15.33 14.9Z" fill="#1ea5ff"></path> <path d="M17.93 12.81H15.33C15.1311 12.81 14.9403 12.731 14.7997 12.5903C14.659 12.4497 14.58 12.2589 14.58 12.06C14.58 11.8611 14.659 11.6703 14.7997 11.5297C14.9403 11.389 15.1311 11.31 15.33 11.31H17.93C18.1289 11.31 18.3197 11.389 18.4603 11.5297C18.601 11.6703 18.68 11.8611 18.68 12.06C18.68 12.2589 18.601 12.4497 18.4603 12.5903C18.3197 12.731 18.1289 12.81 17.93 12.81Z" fill="#1ea5ff"></path> <path d="M17.93 10.6H15.33C15.1311 10.6 14.9403 10.521 14.7997 10.3803C14.659 10.2397 14.58 10.0489 14.58 9.85001C14.58 9.65109 14.659 9.46033 14.7997 9.31968C14.9403 9.17902 15.1311 9.10001 15.33 9.10001H17.93C18.1289 9.10001 18.3197 9.17902 18.4603 9.31968C18.601 9.46033 18.68 9.65109 18.68 9.85001C18.68 10.0489 18.601 10.2397 18.4603 10.3803C18.3197 10.521 18.1289 10.6 17.93 10.6Z" fill="#1ea5ff"></path> </g></svg>
        </a>
        <a href="#">
        <svg width="9px" height="9px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.00098 4H6.01098M3.17188 10C3.58371 8.83481 4.69495 8 6.00117 8C7.30739 8 8.41863 8.83481 8.83046 10M6.00098 15H6.01098M3.17188 21C3.58371 19.8348 4.69495 19 6.00117 19C7.30739 19 8.41863 19.8348 8.83046 21M13.601 8.5H19.401C19.961 8.5 20.2411 8.5 20.455 8.39101C20.6431 8.29513 20.7961 8.14215 20.892 7.95399C21.001 7.74008 21.001 7.46005 21.001 6.9V6.1C21.001 5.53995 21.001 5.25992 20.892 5.04601C20.7961 4.85785 20.6431 4.70487 20.455 4.60899C20.2411 4.5 19.961 4.5 19.401 4.5H13.601C13.0409 4.5 12.7609 4.5 12.547 4.60899C12.3588 4.70487 12.2058 4.85785 12.11 5.04601C12.001 5.25992 12.001 5.53995 12.001 6.1V6.9C12.001 7.46005 12.001 7.74008 12.11 7.95399C12.2058 8.14215 12.3588 8.29513 12.547 8.39101C12.7609 8.5 13.0409 8.5 13.601 8.5ZM13.601 19.5H19.401C19.961 19.5 20.2411 19.5 20.455 19.391C20.6431 19.2951 20.7961 19.1422 20.892 18.954C21.001 18.7401 21.001 18.4601 21.001 17.9V17.1C21.001 16.5399 21.001 16.2599 20.892 16.046C20.7961 15.8578 20.6431 15.7049 20.455 15.609C20.2411 15.5 19.961 15.5 19.401 15.5H13.601C13.0409 15.5 12.7609 15.5 12.547 15.609C12.3588 15.7049 12.2058 15.8578 12.11 16.046C12.001 16.2599 12.001 16.5399 12.001 17.1V17.9C12.001 18.4601 12.001 18.7401 12.11 18.954C12.2058 19.1422 12.3588 19.2951 12.547 19.391C12.7609 19.5 13.0409 19.5 13.601 19.5ZM7.00098 4C7.00098 4.55228 6.55326 5 6.00098 5C5.44869 5 5.00098 4.55228 5.00098 4C5.00098 3.44772 5.44869 3 6.00098 3C6.55326 3 7.00098 3.44772 7.00098 4ZM7.00098 15C7.00098 15.5523 6.55326 16 6.00098 16C5.44869 16 5.00098 15.5523 5.00098 15C5.00098 14.4477 5.44869 14 6.00098 14C6.55326 14 7.00098 14.4477 7.00098 15Z" stroke="#1ea5ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
        <a href="#">
        <svg width="11px" height="11px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 14C9.18131 14.4723 9.47841 14.8915 9.864 15.219C11.0903 16.2483 12.8748 16.2613 14.116 15.25C14.5069 14.9283 14.8109 14.5136 15 14.044" stroke="#1ea5ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12Z" stroke="#1ea5ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 11V10" stroke="#1ea5ff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 11V10" stroke="#1ea5ff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </a>
        <a href="#">
        <svg width="9px" height="9px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#1ea5ff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M36.66,54.45H8.84A2.5,2.5,0,0,1,6.35,52V12.12A2.49,2.49,0,0,1,8.84,9.63H48.68a2.49,2.49,0,0,1,2.49,2.49v22.4"></path><line x1="6.35" y1="20.63" x2="51.17" y2="20.63"></line><line x1="16.46" y1="9.63" x2="16.46" y2="4.63"></line><line x1="40.42" y1="9.63" x2="40.42" y2="4.63"></line><circle cx="45.22" cy="45.44" r="12.43"></circle><polyline points="45.22 36.7 45.22 45.82 49.57 49.16"></polyline></g></svg>
        </a>
        <a href="#">
        <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#1ea5ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#1ea5ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
        </div>`;
    }
    
    const el = element();
    tools.appendChild(htmlToElement(el));
}

// berfungsi untuk menurunkan opacity jika sedang discroll ke bawah
// opacity akan kembali menjadi 1 jika kembali discroll naik
const getScrollY = [0];
window.onscroll = () =>{
    const aaaa = [0];
    if(window.scrollY > 50 && window.innerWidth < 500){
        aaaa[0] = window.scrollY;
        getScrollY.push(aaaa[0]);
    }
    // console.log(aaaa)
    // console.log(getScrollY)

    const lastEl = getScrollY[getScrollY.length - 1]
    const beforeLast = getScrollY[getScrollY.length - 2]
    
    // jika nilai scroll y pada element terakhir lebih besara dari sebelunya maka opacity menurun
    if(lastEl > beforeLast){
        document.querySelector('nav').style.opacity = 0.6;
    }else{
        document.querySelector('nav').style.opacity = 1;
    }
}

// inverse color ketika masing masing tombol ditekan
const itemNavs = document.querySelectorAll('.item-nav');
const navA = document.querySelectorAll('nav a');
navA.forEach(item =>{
    item.addEventListener('click', (event)=>{event.preventDefault()});
})
itemNavs.forEach(item =>{
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        const target = event.currentTarget;
        itemNavs.forEach(item => item.classList.remove('active'));
        target.classList.add('active');
    })
})


// untuk modal post
const threads = document.querySelector('.post-container');
function hidePost(){
    if(window.innerWidth < 550){
        threads.classList.add('hide');
    }else{
        threads.classList.remove('hide');
    }
}
window.onresize = hidePost();
window.addEventListener('DOMContentLoaded', hidePost);
postttMobile();
function postttMobile(){


    const modalForm = document.querySelector('.modal-form');
    const btnCreatePost = document.querySelector('.btn-post');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    
    modal.addEventListener('click',()=>{
        modalForm.classList.remove('active');
        document.querySelector('body').classList.remove('stop-scrolling');
    })
    btnCreatePost.addEventListener('click', (event)=>{
        event.preventDefault();
        modalForm.classList.toggle('active');
        document.querySelector('body').classList.add('stop-scrolling');
    })
    close.addEventListener('click', ()=>{
        modalForm.classList.remove('active');
        document.querySelector('body').classList.remove('stop-scrolling');
    })
}


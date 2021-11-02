const deepMenu = [
    {
        title: 'Home',
        subTitle: 'sweet home',
        link: '/home',
        icon: 'fa fa-home',
    },
    {
        title: 'About us',
        subTitle: 'Home',
        link: '/about-us',
        icon: 'fa fa-edit',
        isActive: true
    },
    {
        title: 'Features',
        subTitle: 'sweet home',
        link: '/features',
        icon: 'fa fa-gift',
    },
    {
        title: 'News',
        subTitle: 'sweet home',
        link: '/news',
        icon: 'fa fa-globe',
    },
    {
        title: 'Blog',
        subTitle: 'what they say',
        link: '/blog',
        icon: 'far fa-comments',
        children: [
            {
                title: 'Mission',
                link: '/blog/mission',
                icon: 'fa fa-globe',
            },
            {
                title: 'Our Team',
                link: '/blog/our-team',
                icon: 'fa fa-users',
                children: [
                    {
                        title: 'Leyla Sparks',
                        link: '/blog/our-team/leyla-sparks',
                        icon: 'fa fa-female',
                    },
                    {
                        title: 'Gleb Ismailov',
                        link: '/blog/our-team/gleb-ismailov',
                        icon: 'fa fa-male',
                        children: [
                            {
                                title: 'About',
                                link: '/blog/our-team/gleb-ismailov/about',
                                icon: 'fa fa-leaf',
                            },
                            {
                                title: 'Skills',
                                link: '/blog/our-team/gleb-ismailov/skills',
                                icon: 'fa fa-tasks',
                            }
                        ]
                    },
                    {
                        title: 'Viktoria Gibbers',
                        link: '/blog/our-team/viktoria-gibbers',
                        icon: 'fa fa-female',
                    },
                ]
            },
        ]
    },
    {
        title: 'Portfolio',
        subTitle: 'sweet home',
        link: '/portfolio',
        icon: 'far fa-image',
    },
    {
        title: 'Contacts',
        subTitle: 'drop a line',
        link: '/contacts',
        icon: 'far fa-envelope'
    },
]

let menu = (arg) =>
    `<ul>
    ${arg.map(elem =>
        elem.children ?
            `<li>
                    <div class="d-flex item child">
                        <div class="icon">
                        <i class="${elem.icon}"></i>
                        </div>
                        <div class="content">
                            <h2>${elem.title}</h2>
                            <p>${elem.subTitle}</p>
                        </div>
                        <div class="show">${subMenu(elem.children)}</div>
                    </div>
                    <span class="arrow"></span>
              </li>`
            : `<li class="${elem.isActive === true ? 'border' : ''}">
                <span class="${elem.isActive === true ? 'arrow-left' : ''}"></span>
                    <div class="d-flex item">
                        <div class="icon">
                        <i class="${elem.icon}"></i>
                        </div>
                        <div class="content">
                            <h2>${elem.title}</h2>
                            <p>${elem.subTitle}</p>
                        </div>
                    </div>
                <span class="${elem.isActive === true ? 'arrow-right' : ''}"></span>
            </li>`
    ).join('')}
    </ul>`

let subMenu = (arg) =>
    `<ul>
    ${arg.map(elem =>
        elem.children ?
            `<li>
                <div class="d-flex item child">
                    <div class="icon">
                    <i class="${elem.icon}"></i>
                    </div>
                    <div class="content">
                        <h2>${elem.title}</h2>
                    </div>
                    <div class="show">${subMenu(elem.children)}</div>
                </div>
                <span class="arrow"></span>
              </li>`
            : `<li>
                <div class="d-flex item">
                    <div class="icon">
                    <i class="${elem.icon}"></i>
                    </div>
                    <div class="content">
                        <h2>${elem.title}</h2>
                    </div>
                </div>
            </li>`
    ).join('')}
    </ul>`
let search = 
    `<li>
        <div class="search">
            <input type="text" placeholder="search..."/>
            <i class="fas fa-search"></i>
        </div>
    </li>`
const container = document.createElement('div');
container.className = 'container';
const result = menu(deepMenu);
let frag = document.createRange().createContextualFragment(result);
let searchbtn = document.createRange().createContextualFragment(search);
container.appendChild(frag);
const body = document.getElementsByTagName('body')[0];
body.appendChild(container);
document.getElementsByTagName('ul')[0].appendChild(searchbtn);

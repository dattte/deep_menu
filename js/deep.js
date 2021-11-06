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

    // start create deep-menu
    const creaDeepMenu = (arg) =>
        `<ul>
            ${arg.map(elem =>
            elem.children ?
                `<li>
                    <a href="${elem.link}">
                        <div class="item child">
                            <div class="icon">
                                <i class="${elem.icon}"></i>
                            </div>
                            <div class="content">
                                <h2>${elem.title}</h2>
                                <p>${elem.subTitle}</p>
                            </div>
                            <div class="show">${creaSubMenu(elem.children)}</div>
                        </div>
                        <span class="arrow arrow-right"></span>
                    </a>
                </li>`
                : `
                <li ${elem.isActive === true ? 'class="border"' : ''}>
                    <a href="${elem.link}">
                        ${elem.isActive === true ? '<span class="arrow-left"></span>' : ''}
                            <div class="item">
                                <div class="icon">
                                    <i class="${elem.icon}"></i>
                                </div>
                                <div class="content">
                                    <h2>${elem.title}</h2>
                                    <p>${elem.subTitle}</p>
                                </div>
                            </div>
                        ${elem.isActive === true ? '<span class="arrow-right"></span>' : ''}
                    </a>
                </li>`
            ).join('')}
        </ul>`
    // end create deep-menu

    //start create sub-menu
    const creaSubMenu = (arg) =>
        `<ul>
            ${arg.map(elem =>
            elem.children ?
                `<li>
                    <a href="${elem.link}">
                        <div class="item child">
                            <div class="icon">
                                <i class="${elem.icon}"></i>
                            </div>
                            <div class="content">
                                <h2>${elem.title}</h2>
                            </div>
                            <div class="show">${creaSubMenu(elem.children)}</div>
                        </div>
                        <span class="arrow arrow-right"></span>
                    </a>
                </li>`
                : `<li>
                    <a href="${elem.link}">
                        <div class="item">
                            <div class="icon">
                                <i class="${elem.icon}"></i>
                            </div>
                            <div class="content">
                                <h2>${elem.title}</h2>
                            </div>
                        </div>
                    </a>
                </li>`
            ).join('')}
        </ul>`
    // end create sub-menu

    // start create button search
    const search =
        `<li>
            <div class="search">
                <input type="text" placeholder="search..."/>
                <i class="fas fa-search"></i>
            </div>
        </li>`
    // end create button search

    // start create element
    function createElement() {
        const container = document.createElement('div');
        container.className = 'container';
        const frag = document.createRange().createContextualFragment(creaDeepMenu(deepMenu));
        container.appendChild(frag);
        const body = document.getElementsByTagName('body')[0];
        body.appendChild(container);
        const searchBtn = document.createRange().createContextualFragment(search);
        document.getElementsByTagName('ul')[0].appendChild(searchBtn);
    }

    createElement()
    // end create element
